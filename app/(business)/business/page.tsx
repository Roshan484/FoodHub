import { Metadata } from "next";
import PerformanceMetrics from "./_components/performance-metrics";
import OrdersOverview from "./_components/orders-overview";
import RevenueChart from "./_components/revenue-charts";
import MenuItems from "./_components/menu-items";
import QuickActions from "./_components/quick-actions";

export const metadata: Metadata = {
  title: "Restaurant Dashboard | FoodDelivery",
  description:
    "Manage your restaurant, track orders, and boost your performance.",
};

export default function BusinessPage() {
  return (
    <div className="">
      <main className="container mx-auto px-4 py-4">
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <PerformanceMetrics />
        </div>
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <OrdersOverview />
          <RevenueChart />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MenuItems />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
}
