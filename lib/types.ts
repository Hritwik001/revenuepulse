// lib/types.ts

export type MetricPoint = {
  date: string; // ISO date
  value: number;
};

export type Plan = "Basic" | "Pro" | "Enterprise";

export type CustomerStatus = "active" | "trial" | "cancelled";

export type Customer = {
  id: string;
  name: string;
  email: string;
  plan: Plan;
  mrr: number;
  status: CustomerStatus;
  country: string;
  createdAt: string;
  lastActiveAt: string;
};

export type CohortCell = {
  cohortMonth: string; // "2024-01"
  monthOffset: number; // 0,1,2...
  retentionRate: number; // 0–1
};

export type FeatureUsage = {
  feature: string;
  count: number;
};

export type ProductEvent = {
  id: string;
  customerName: string;
  type: string;
  createdAt: string;
  metadata?: string;
};

export type FunnelStep = {
  label: string;
  value: number;
};

// ------- Revenue types (used only for /revenue) -------

export type RevenueByPlanPoint = {
  month: string; // "2024-01"
  basic: number;
  pro: number;
  enterprise: number;
};

export type Subscription = {
  id: string;
  customerName: string;
  plan: Plan;
  mrr: number;
  status: CustomerStatus;
  startedAt: string;
  renewsAt: string;
};
