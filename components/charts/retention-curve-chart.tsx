"use client";

import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type RetentionPoint = {
  monthOffset: number;
  retentionRate: number; // 0–1
};

export function RetentionCurveChart({ data }: { data: RetentionPoint[] }) {
  if (!data.length) {
    return (
      <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
        No retention data.
      </div>
    );
  }

  const chartData = data.map((point) => ({
    month: `M${point.monthOffset}`,
    retention: point.retentionRate * 100,
  }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tickMargin={8} />
          <YAxis tickMargin={8} unit="%" />
          <Tooltip formatter={(value: any) => `${value.toFixed(1)}%`} />
          <Line
            type="monotone"
            dataKey="retention"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
