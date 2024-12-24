# Image and container names
IMAGE_NAME := momo
CONTAINER_NAME := momo-container
TAG := latest

# Docker configuration
PORT := 3000

.PHONY: help up down dev dev-down logs shell clean rebuild ps

# Default target
help:
	@echo "Available commands:"
	@echo "  make up        - Start production container"
	@echo "  make down      - Stop production container"
	@echo "  make dev       - Start development container"
	@echo "  make dev-down  - Stop development container"
	@echo "  make ps        - Show running containers"
	@echo "  make logs      - Show container logs"
	@echo "  make shell     - Open a shell in the container"
	@echo "  make clean     - Remove all containers and images"
	@echo "  make rebuild   - Rebuild and restart containers"

# Production commands
up:
	docker compose build app
	docker compose up -d app

down:
	docker compose down

# Development commands
build-dev:
	docker compose build dev
	
dev:
	docker compose up -d dev

dev-down:
	docker compose down dev


# Utility commands
ps:
	docker compose ps

logs:
	docker compose logs -f

shell:
	docker compose exec app /bin/sh

clean:
	docker compose down --rmi all --volumes --remove-orphans

rebuild:
	docker compose build --no-cache
	docker compose up -d