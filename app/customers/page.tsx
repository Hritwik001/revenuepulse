"use client";

import { CustomersTable } from "@/app/customers/customers-table";

export default function CustomersPage() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Customers</h2>
        <p className="text-sm text-muted-foreground">
          Explore your customer base, subscriptions, and activity.
        </p>
      </div>

      <CustomersTable />
    </div>
  );
}
