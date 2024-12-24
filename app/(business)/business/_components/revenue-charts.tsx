"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const weeklyData = [
  { name: "Mon", revenue: 400, orders: 20 },
  { name: "Tue", revenue: 300, orders: 15 },
  { name: "Wed", revenue: 520, orders: 25 },
  { name: "Thu", revenue: 450, orders: 22 },
  { name: "Fri", revenue: 600, orders: 30 },
  { name: "Sat", revenue: 750, orders: 38 },
  { name: "Sun", revenue: 680, orders: 34 },
];

const monthlyData = [
  { name: "Week 1", revenue: 2800, orders: 140 },
  { name: "Week 2", revenue: 3200, orders: 160 },
  { name: "Week 3", revenue: 3600, orders: 180 },
  { name: "Week 4", revenue: 3400, orders: 170 },
];

export default function RevenueChart() {
  const [timeFrame, setTimeFrame] = useState<"weekly" | "monthly">("weekly");
  const data = timeFrame === "weekly" ? weeklyData : monthlyData;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Revenue Overview</CardTitle>
        <Select
          defaultValue={timeFrame}
          onValueChange={(value) => setTimeFrame(value as "weekly" | "monthly")}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue>
              {timeFrame === "weekly" ? "Weekly" : "Monthly"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              yAxisId="left"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="#8884d8"
              strokeWidth={2}
              name="Revenue"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="orders"
              stroke="#82ca9d"
              strokeWidth={2}
              name="Orders"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
