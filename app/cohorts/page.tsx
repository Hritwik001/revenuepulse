"use client";

import { CohortHeatmap } from "@/app/cohorts/cohort-heatmap";

export default function CohortsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Cohorts</h2>
        <p className="text-sm text-muted-foreground">
          Retention patterns across months after signup.
        </p>
      </div>

      <CohortHeatmap />
    </div>
  );
}
