# Use the official Bun image
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install dependencies into temp directory (caches dependencies)
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install production dependencies
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy dependencies and project files, then build the app
FROM base AS build
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Set environment to production for Next.js build
ENV NODE_ENV=production
RUN bun run next build

# Prepare the final production image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=build /usr/src/app/.next .next
COPY --from=build /usr/src/app/package.json .

# Set the default user, expose the required port, and run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "next", "start" ]
