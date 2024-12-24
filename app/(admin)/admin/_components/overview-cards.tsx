import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingBag,
  Store,
} from "lucide-react";

const metrics = [
  {
    name: "Total Revenue",
    value: "$1,234,567",
    icon: DollarSign,
    trend: "up",
    percentage: "12%",
  },
  {
    name: "Active Users",
    value: "45,678",
    icon: Users,
    trend: "up",
    percentage: "8%",
  },
  {
    name: "Total Orders",
    value: "89,012",
    icon: ShoppingBag,
    trend: "up",
    percentage: "5%",
  },
  {
    name: "Active Restaurants",
    value: "1,234",
    icon: Store,
    trend: "down",
    percentage: "3%",
  },
];

export default function OverviewCards() {
  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.name}>
          <CardContent className="flex items-center p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
              <metric.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {metric.name}
              </p>
              <h3 className="text-2xl font-bold">{metric.value}</h3>
              <p
                className={`text-xs font-medium ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}
              >
                {metric.trend === "up" ? (
                  <TrendingUp className="inline w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="inline w-3 h-3 mr-1" />
                )}
                {metric.percentage}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
