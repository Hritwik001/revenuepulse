// data/product.ts
import { FeatureUsage, ProductEvent } from "@/lib/types";

export const featureUsage: FeatureUsage[] = [
  { feature: "Dashboards created", count: 320 },
  { feature: "Reports exported", count: 140 },
  { feature: "Alerts configured", count: 85 },
  { feature: "API tokens used", count: 52 },
];

export const recentEvents: ProductEvent[] = [
  {
    id: "e_1",
    customerName: "Acme Inc",
    type: "dashboard_created",
    createdAt: "2024-06-05T10:15:00Z",
    metadata: "Q2 Revenue Dashboard",
  },
  {
    id: "e_2",
    customerName: "Beta Analytics",
    type: "report_exported",
    createdAt: "2024-06-05T09:40:00Z",
    metadata: "Monthly Usage",
  },
];
