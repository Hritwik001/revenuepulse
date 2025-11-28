"use client";

import { useQuery } from "@tanstack/react-query";
import { getRevenueByPlan } from "@/lib/api";
import { RevenueByPlanChart } from "@/components/charts/revenue-by-plan-chart";
import { SubscriptionsTable } from "@/components/revenue/subscriptions-table";
import { KpiCard } from "@/components/ui/kpi-card";

export default function RevenuePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["revenue-by-plan"],
    queryFn: getRevenueByPlan,
  });

  const totalLatest =
    data && data.length
      ? data[data.length - 1].basic +
        data[data.length - 1].pro +
        data[data.length - 1].enterprise
      : 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Revenue & Subscriptions
        </h2>
        <p className="text-sm text-muted-foreground">
          Track your recurring revenue and subscription base across plans.
        </p>
      </div>

      {/* KPI row */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <KpiCard
          title="Latest Monthly Revenue"
          value={totalLatest ? `$${totalLatest.toLocaleString()}` : "--"}
          description="Sum of Basic, Pro, and Enterprise revenue."
        />
        <KpiCard
          title="Number of Subscriptions"
          value="3"
          description="Sample data from mock subscriptions."
        />
        <KpiCard
          title="Top Plan"
          value="Pro"
          description="Highest-contributing plan by MRR."
        />
      </div>

      {/* Chart */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Revenue by plan (stacked)
        </h3>

        {isLoading && (
          <div className="h-72 flex items-center justify-center text-sm text-muted-foreground">
            Loading revenue chart…
          </div>
        )}

        {error && (
          <div className="text-sm text-red-500">
            Failed to load revenue data.
          </div>
        )}

        {data && !isLoading && <RevenueByPlanChart data={data} />}
      </div>

      {/* Subscriptions table */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Subscriptions
        </h3>
        <SubscriptionsTable />
      </div>
    </div>
  );
}
