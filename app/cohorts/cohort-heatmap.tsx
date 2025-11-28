"use client";

import { useQuery } from "@tanstack/react-query";
import { getCohortCells } from "@/lib/api";
import type { CohortCell } from "@/lib/types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

function getColor(rate: number) {
  if (rate >= 0.9) return "bg-blue-600";
  if (rate >= 0.75) return "bg-blue-500";
  if (rate >= 0.6) return "bg-blue-400";
  if (rate >= 0.4) return "bg-blue-300";
  if (rate >= 0.2) return "bg-blue-200";
  return "bg-blue-100";
}

export function CohortHeatmap() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cohorts"],
    queryFn: getCohortCells,
  });

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading cohort data…</p>;
  }

  if (error || !data) {
    return <p className="text-sm text-red-500">Failed to load cohort data.</p>;
  }

  // Group by cohortMonth
  const byMonth: Record<string, CohortCell[]> = {};
  data.forEach((cell) => {
    if (!byMonth[cell.cohortMonth]) byMonth[cell.cohortMonth] = [];
    byMonth[cell.cohortMonth].push(cell);
  });

  const cohortMonths = Object.keys(byMonth).sort();
  const maxOffset = Math.max(...data.map((c) => c.monthOffset));

  return (
    <div className="w-full overflow-x-auto">
      <TooltipProvider>
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left text-xs text-muted-foreground">Cohort</th>
              {Array.from({ length: maxOffset + 1 }).map((_, i) => (
                <th key={i} className="p-2 text-xs text-muted-foreground text-center">
                  M{i}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {cohortMonths.map((month) => {
              const row = byMonth[month].sort((a, b) => a.monthOffset - b.monthOffset);

              return (
                <tr key={month} className="h-10">
                  <td className="p-2 text-sm text-muted-foreground whitespace-nowrap">
                    {month}
                  </td>

                  {Array.from({ length: maxOffset + 1 }).map((_, i) => {
                    const cell = row.find((c) => c.monthOffset === i);

                    if (!cell) {
                      return <td key={i} className="p-2"></td>;
                    }

                    const color = getColor(cell.retentionRate);

                    return (
                      <td key={i} className="p-2 text-center">
                        <Tooltip>
                          <TooltipTrigger>
                            <div
                              className={cn(
                                "w-12 h-8 rounded-md flex items-center justify-center text-xs text-white",
                                color
                              )}
                            >
                              {(cell.retentionRate * 100).toFixed(0)}%
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              {month} → M{i}:{" "}
                              {(cell.retentionRate * 100).toFixed(1)}%
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </TooltipProvider>
    </div>
  );
}
