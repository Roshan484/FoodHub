"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function MenuItems() {
  const [items, setItems] = useState([
    { id: 1, name: "Margherita Pizza", price: 12.99 },
    { id: 2, name: "Caesar Salad", price: 8.99 },
    { id: 3, name: "Spaghetti Carbonara", price: 14.99 },
  ]);

  const [newItem, setNewItem] = useState({ name: "", price: "" });

  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      setItems([
        ...items,
        {
          id: items.length + 1,
          name: newItem.name,
          price: Number(newItem.price),
        },
      ]);
      setNewItem({ name: "", price: "" });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Menu Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="icon">
                  <Edit2 className="h-4 w-4" />
                  <span className="sr-only">Edit {item.name}</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete {item.name}</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="item-name">Item Name</Label>
              <Input
                id="item-name"
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
                placeholder="Enter item name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="item-price">Price</Label>
              <Input
                id="item-price"
                type="number"
                value={newItem.price}
                onChange={(e) =>
                  setNewItem({ ...newItem, price: e.target.value })
                }
                placeholder="Enter price"
              />
            </div>
          </div>
          <Button onClick={handleAddItem} className="w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Item
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
