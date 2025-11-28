"use client";

import { useQuery } from "@tanstack/react-query";
import { getFeatureUsage } from "@/lib/api";
import { FeatureUsageBarChart } from "@/components/charts/feature-usage-bar-chart";
import { RecentEventsList } from "@/components/product/recent-events-list";
import { KpiCard } from "@/components/ui/kpi-card";

export default function ProductAnalyticsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["feature-usage"],
    queryFn: getFeatureUsage,
  });

  const totalEvents =
    data?.reduce((sum, item) => sum + item.count, 0) ?? 0;

  const topFeature = data && data.length
    ? [...data].sort((a, b) => b.count - a.count)[0].feature
    : "-";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">
          Product Analytics
        </h2>
        <p className="text-sm text-muted-foreground">
          Understand how customers use key features and what events they trigger.
        </p>
      </div>

      {/* KPI row */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <KpiCard
          title="Total feature events"
          value={totalEvents ? totalEvents.toString() : "--"}
          description="Sum of tracked feature usage events."
        />
        <KpiCard
          title="Tracked features"
          value={data ? data.length.toString() : "--"}
          description="Number of distinct product features tracked."
        />
        <KpiCard
          title="Top feature"
          value={topFeature}
          description="Feature with the highest event count."
        />
      </div>

      {/* Feature usage chart */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Feature usage (events per feature)
        </h3>

        {isLoading && (
          <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
            Loading feature usage…
          </div>
        )}

        {error && (
          <div className="text-sm text-red-500">
            Failed to load feature usage data.
          </div>
        )}

        {data && !isLoading && <FeatureUsageBarChart data={data} />}
      </div>

      {/* Recent events list */}
      <RecentEventsList />
    </div>
  );
}
