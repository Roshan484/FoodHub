"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Pizza Palace", orders: 4000 },
  { name: "Burger Barn", orders: 3000 },
  { name: "Sushi Spot", orders: 2000 },
  { name: "Taco Time", orders: 2780 },
  { name: "Pasta Place", orders: 1890 },
  { name: "Asian Food", orders: 1100 },

];

export default function RestaurantAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Restaurants</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip />
            <Bar dataKey="orders" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
