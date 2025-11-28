"use client";

import { useQuery } from "@tanstack/react-query";
import { getSubscriptions } from "@/lib/api";
import type { Subscription } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function StatusBadge({ status }: { status: Subscription["status"] }) {
  const label =
    status === "active"
      ? "Active"
      : status === "trial"
      ? "Trial"
      : "Cancelled";

  const color =
    status === "active"
      ? "bg-emerald-100 text-emerald-800"
      : status === "trial"
      ? "bg-amber-100 text-amber-800"
      : "bg-rose-100 text-rose-800";

  return (
    <Badge className={color + " border-0"} variant="secondary">
      {label}
    </Badge>
  );
}

export function SubscriptionsTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: getSubscriptions,
  });

  if (isLoading) {
    return (
      <div className="py-8 text-sm text-muted-foreground">
        Loading subscriptions…
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="py-8 text-sm text-red-500">
        Failed to load subscriptions.
      </div>
    );
  }

  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>MRR</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Started</TableHead>
            <TableHead>Renews</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((s) => (
            <TableRow key={s.id}>
              <TableCell>{s.customerName}</TableCell>
              <TableCell>{s.plan}</TableCell>
              <TableCell>${s.mrr.toLocaleString()}</TableCell>
              <TableCell>
                <StatusBadge status={s.status} />
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">
                {s.startedAt}
              </TableCell>
              <TableCell className="text-xs text-muted-foreground">
                {s.renewsAt}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
