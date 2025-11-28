// data/metrics.ts
import {
  MetricPoint,
  FunnelStep,
  RevenueByPlanPoint,
  Subscription,
} from "@/lib/types";

export const mrrHistory: MetricPoint[] = [
  { date: "2024-01-01", value: 12000 },
  { date: "2024-02-01", value: 13500 },
  { date: "2024-03-01", value: 15000 },
  { date: "2024-04-01", value: 16250 },
  { date: "2024-05-01", value: 17500 },
  { date: "2024-06-01", value: 19000 },
];

export const dauHistory: MetricPoint[] = [
  { date: "2024-06-01", value: 320 },
  { date: "2024-06-02", value: 340 },
  { date: "2024-06-03", value: 360 },
  { date: "2024-06-04", value: 410 },
  { date: "2024-06-05", value: 395 },
];

export const signupFunnel: FunnelStep[] = [
  { label: "Visited Site", value: 5000 },
  { label: "Signed Up", value: 1200 },
  { label: "Started Trial", value: 700 },
  { label: "Became Paying", value: 260 },
];

// ------- Revenue data (for /revenue) -------

export const revenueByPlan: RevenueByPlanPoint[] = [
  { month: "2024-01", basic: 3000, pro: 6000, enterprise: 3000 },
  { month: "2024-02", basic: 3200, pro: 7000, enterprise: 3300 },
  { month: "2024-03", basic: 3400, pro: 7800, enterprise: 3800 },
  { month: "2024-04", basic: 3600, pro: 8200, enterprise: 4450 },
  { month: "2024-05", basic: 3800, pro: 8800, enterprise: 4900 },
  { month: "2024-06", basic: 4000, pro: 9500, enterprise: 5500 },
];

export const subscriptions: Subscription[] = [
  {
    id: "s_1",
    customerName: "Acme Inc",
    plan: "Pro",
    mrr: 499,
    status: "active",
    startedAt: "2023-10-01",
    renewsAt: "2024-10-01",
  },
  {
    id: "s_2",
    customerName: "Beta Analytics",
    plan: "Basic",
    mrr: 99,
    status: "active",
    startedAt: "2024-01-15",
    renewsAt: "2025-01-15",
  },
  {
    id: "s_3",
    customerName: "Nimbus Cloud",
    plan: "Enterprise",
    mrr: 1999,
    status: "trial",
    startedAt: "2024-05-10",
    renewsAt: "2024-06-10",
  },
];
