"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { RevenueByPlanPoint } from "@/lib/types";

type Props = {
  data: RevenueByPlanPoint[];
};

export function RevenueByPlanChart({ data }: Props) {
  if (!data.length) {
    return (
      <div className="h-72 flex items-center justify-center text-sm text-muted-foreground">
        No revenue data.
      </div>
    );
  }

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tickMargin={8} />
          <YAxis tickMargin={8} />
          <Tooltip />
          <Legend />
          <Bar dataKey="basic" stackId="a" fill="#cbd5f5" name="Basic" />
          <Bar dataKey="pro" stackId="a" fill="#60a5fa" name="Pro" />
          <Bar dataKey="enterprise" stackId="a" fill="#1d4ed8" name="Enterprise" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
