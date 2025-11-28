// data/cohorts.ts
import { CohortCell } from "@/lib/types";

export const cohortCells: CohortCell[] = [
  // Jan cohort
  { cohortMonth: "2024-01", monthOffset: 0, retentionRate: 1.0 },
  { cohortMonth: "2024-01", monthOffset: 1, retentionRate: 0.85 },
  { cohortMonth: "2024-01", monthOffset: 2, retentionRate: 0.78 },
  { cohortMonth: "2024-01", monthOffset: 3, retentionRate: 0.70 },

  // Feb cohort
  { cohortMonth: "2024-02", monthOffset: 0, retentionRate: 1.0 },
  { cohortMonth: "2024-02", monthOffset: 1, retentionRate: 0.82 },
  { cohortMonth: "2024-02", monthOffset: 2, retentionRate: 0.75 },

  // Mar cohort
  { cohortMonth: "2024-03", monthOffset: 0, retentionRate: 1.0 },
  { cohortMonth: "2024-03", monthOffset: 1, retentionRate: 0.80 },
];
