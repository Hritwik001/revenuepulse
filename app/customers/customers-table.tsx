"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "@/lib/api";
import { Customer } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function PlanBadge({ plan }: { plan: Customer["plan"] }) {
  const color =
    plan === "Enterprise"
      ? "bg-purple-100 text-purple-800"
      : plan === "Pro"
      ? "bg-blue-100 text-blue-800"
      : "bg-slate-100 text-slate-800";

  return (
    <Badge className={color + " border-0"} variant="secondary">
      {plan}
    </Badge>
  );
}

function StatusBadge({ status }: { status: Customer["status"] }) {
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

export function CustomersTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = search.toLowerCase().trim();
    if (!q) return data;
    return data.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.country.toLowerCase().includes(q)
    );
  }, [data, search]);

  if (isLoading) {
    return (
      <div className="py-10 text-sm text-muted-foreground">
        Loading customers…
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-sm text-red-500">
        Failed to load customers.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* search bar */}
      <div className="flex items-center justify-between gap-4">
        <Input
          placeholder="Search by name, email, or country…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <p className="text-xs text-muted-foreground">
          Showing {filtered.length} customer{filtered.length !== 1 && "s"}
        </p>
      </div>

      {/* table */}
      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden md:table-cell">Plan</TableHead>
              <TableHead>MRR</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">
                Country
              </TableHead>
              <TableHead className="hidden lg:table-cell">
                Last active
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((c) => (
              <TableRow key={c.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{c.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {c.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <PlanBadge plan={c.plan} />
                </TableCell>
                <TableCell>${c.mrr.toLocaleString()}</TableCell>
                <TableCell>
                  <StatusBadge status={c.status} />
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {c.country}
                </TableCell>
                <TableCell className="hidden lg:table-cell text-xs text-muted-foreground">
                  {c.lastActiveAt}
                </TableCell>
              </TableRow>
            ))}

            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="py-10 text-center text-sm text-muted-foreground">
                  No customers match this search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
