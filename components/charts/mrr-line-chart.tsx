// components/charts/mrr-line-chart.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { MetricPoint } from "@/lib/types";

type MrrLineChartProps = {
  data: MetricPoint[];
};

export function MrrLineChart({ data }: MrrLineChartProps) {
  if (!data.length) {
    return (
      <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
        No MRR data available.
      </div>
    );
  }

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickMargin={8}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            tickMargin={8}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
