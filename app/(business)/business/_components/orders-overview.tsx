"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allOrders = [
  { id: 1, customer: "John Doe", items: 3, total: 42.5, status: "Preparing" },
  {
    id: 2,
    customer: "Jane Smith",
    items: 2,
    total: 28.75,
    status: "Delivered",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    items: 1,
    total: 15.99,
    status: "In Transit",
  },
  {
    id: 4,
    customer: "Alice Brown",
    items: 4,
    total: 55.0,
    status: "Preparing",
  },
  {
    id: 5,
    customer: "Charlie Davis",
    items: 2,
    total: 31.5,
    status: "Delivered",
  },
];

export default function OrdersOverview() {
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOrders =
    statusFilter === "All"
      ? allOrders
      : allOrders.filter((order) => order.status === statusFilter);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Orders</CardTitle>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Preparing">Preparing</SelectItem>
            <SelectItem value="In Transit">In Transit</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{order.customer}</p>
                <p className="text-sm text-gray-500">
                  {order.items} items - ${order.total.toFixed(2)}
                </p>
              </div>
              <Badge
                variant={order.status === "Delivered" ? "secondary" : "default"}
              >
                {order.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
