import { Metadata } from "next";
import RestaurantAnalytics from "./_components/resturant-analytics";
import OverviewCards from "./_components/overview-cards";
import UserAnalytics from "./_components/user-analytics";
import OrderAnalytics from "./_components/order-analytics";
import FinancialOverview from "./_components/financial-overview";
import SupportIssues from "./_components/support-issue";
import QuickActions from "./_components/quick-actions";

export const metadata: Metadata = {
  title: "Admin Dashboard | FoodDelivery",
  description:
    "Manage your multi-vendor food delivery platform, track performance, and analyze data.",
};

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <OverviewCards />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <RestaurantAnalytics />
          <UserAnalytics />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <OrderAnalytics />
          <FinancialOverview />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SupportIssues />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
}
