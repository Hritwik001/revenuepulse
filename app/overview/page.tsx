"use client";

import { useQuery } from "@tanstack/react-query";
import { getMrrHistory, getDauHistory } from "@/lib/api";
import { KpiCard } from "@/components/ui/kpi-card";
import { MrrLineChart } from "@/components/charts/mrr-line-chart";

export default function OverviewPage() {
  const {
    data: mrrData,
    isLoading: mrrLoading,
    error: mrrError,
  } = useQuery({
    queryKey: ["mrr"],
    queryFn: getMrrHistory,
  });

  const {
    data: dauData,
    isLoading: dauLoading,
  } = useQuery({
    queryKey: ["dau"],
    queryFn: getDauHistory,
  });

  const latestMrr = mrrData?.[mrrData.length - 1]?.value ?? 0;
  const prevMrr = mrrData?.[mrrData.length - 2]?.value ?? 0;
  const mrrDelta = prevMrr ? ((latestMrr - prevMrr) / prevMrr) * 100 : 0;

  const latestDau = dauData?.[dauData.length - 1]?.value ?? 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
        <p className="text-sm text-muted-foreground">
          High-level view of your MRR growth, churn, and active users.
        </p>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Current MRR"
          value={latestMrr ? `$${latestMrr.toLocaleString()}` : "--"}
          description="Latest monthly recurring revenue."
        />
        <KpiCard
          title="MRR Change"
          value={
            mrrDelta
              ? `${mrrDelta > 0 ? "+" : ""}${mrrDelta.toFixed(1)}%`
              : "--"
          }
          description="Change compared to previous month."
        />
        <KpiCard
          title="Latest DAU"
          value={latestDau ? latestDau.toString() : "--"}
          description="Daily active users (yesterday)."
        />
        <KpiCard
          title="Churn (Placeholder)"
          value="2.8%"
          description="Sample churn rate (we'll wire this later)."
        />
      </div>

      {/* MRR chart */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          MRR over time
        </h3>

        {mrrLoading && (
          <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
            Loading MRR chart...
          </div>
        )}

        {mrrError && (
          <div className="text-sm text-red-500">
            Failed to load MRR data.
          </div>
        )}

        {mrrData && !mrrLoading && <MrrLineChart data={mrrData} />}
      </div>
    </div>
  );
}
