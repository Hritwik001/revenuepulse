"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCohortCells } from "@/lib/api";
import type { CohortCell } from "@/lib/types";
import { RetentionCurveChart } from "@/components/charts/retention-curve-chart";
import { KpiCard } from "@/components/ui/kpi-card";

export default function RetentionPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cohorts"],
    queryFn: getCohortCells,
  });

  const aggregated = useMemo(() => {
    if (!data || !data.length) return [] as { monthOffset: number; retentionRate: number }[];

    const grouped: Record<number, { sum: number; count: number }> = {};

    data.forEach((cell: CohortCell) => {
      if (!grouped[cell.monthOffset]) {
        grouped[cell.monthOffset] = { sum: 0, count: 0 };
      }
      grouped[cell.monthOffset].sum += cell.retentionRate;
      grouped[cell.monthOffset].count += 1;
    });

    return Object.keys(grouped)
      .map((key) => {
        const offset = Number(key);
        const { sum, count } = grouped[offset];
        return {
          monthOffset: offset,
          retentionRate: sum / count,
        };
      })
      .sort((a, b) => a.monthOffset - b.monthOffset);
  }, [data]);

  const month1 = aggregated.find((p) => p.monthOffset === 1)?.retentionRate ?? 0;
  const month3 = aggregated.find((p) => p.monthOffset === 3)?.retentionRate ?? 0;
  const churn3 = month3 ? 1 - month3 : 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Retention</h2>
        <p className="text-sm text-muted-foreground">
          See how well you retain users over time after signup.
        </p>
      </div>

      {/* KPI cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <KpiCard
          title="Month-1 retention"
          value={month1 ? `${(month1 * 100).toFixed(1)}%` : "--"}
          description="Users retained one month after signup."
        />
        <KpiCard
          title="Month-3 retention"
          value={month3 ? `${(month3 * 100).toFixed(1)}%` : "--"}
          description="Users retained three months after signup."
        />
        <KpiCard
          title="3-month churn"
          value={month3 ? `${(churn3 * 100).toFixed(1)}%` : "--"}
          description="Users lost within three months of signup."
        />
      </div>

      {/* Retention curve */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Average retention curve across cohorts
        </h3>

        {isLoading && (
          <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
            Loading retention…
          </div>
        )}

        {error && (
          <div className="text-sm text-red-500">
            Failed to load retention data.
          </div>
        )}

        {aggregated.length > 0 && !isLoading && (
          <RetentionCurveChart data={aggregated} />
        )}

        {!aggregated.length && !isLoading && !error && (
          <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
            No retention data available.
          </div>
        )}
      </div>
    </div>
  );
}
