// components/layout/topbar.tsx
"use client";

import { ReactNode } from "react";

export function Topbar({ title }: { title?: ReactNode }) {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4">
      <h1 className="text-lg font-semibold tracking-tight">
        {title ?? "Dashboard"}
      </h1>
      <div className="text-sm text-muted-foreground">
        {/* Later: add user avatar, date range filter, etc. */}
        SaaS Growth & Revenue Analytics
      </div>
    </header>
  );
}
