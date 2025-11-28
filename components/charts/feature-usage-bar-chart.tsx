"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { FeatureUsage } from "@/lib/types";

type Props = {
  data: FeatureUsage[];
};

export function FeatureUsageBarChart({ data }: Props) {
  if (!data.length) {
    return (
      <div className="h-64 flex items-center justify-center text-sm text-muted-foreground">
        No feature usage data.
      </div>
    );
  }

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="feature" tickMargin={8} />
          <YAxis tickMargin={8} />
          <Tooltip />
          <Bar dataKey="count" fill="#2563eb" name="Events" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
