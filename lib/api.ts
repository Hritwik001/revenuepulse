// lib/api.ts
import {
  mrrHistory,
  dauHistory,
  signupFunnel,
  revenueByPlan,
  subscriptions,
} from "@/data/metrics";
import { customers } from "@/data/customers";
import { cohortCells } from "@/data/cohorts";
import { featureUsage, recentEvents } from "@/data/products";
import {
  MetricPoint,
  Customer,
  CohortCell,
  FeatureUsage,
  ProductEvent,
  FunnelStep,
  RevenueByPlanPoint,
  Subscription,
} from "./types";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ------- Metrics -------

export async function getMrrHistory(): Promise<MetricPoint[]> {
  await sleep(300);
  return mrrHistory;
}

export async function getDauHistory(): Promise<MetricPoint[]> {
  await sleep(300);
  return dauHistory;
}

export async function getSignupFunnel(): Promise<FunnelStep[]> {
  await sleep(300);
  return signupFunnel;
}

// ------- Customers -------

export async function getCustomers(): Promise<Customer[]> {
  await sleep(300);
  return customers;
}

// ------- Cohorts -------

export async function getCohortCells(): Promise<CohortCell[]> {
  await sleep(300);
  return cohortCells;
}

// ------- Product analytics -------

export async function getFeatureUsage(): Promise<FeatureUsage[]> {
  await sleep(300);
  return featureUsage;
}

export async function getRecentEvents(): Promise<ProductEvent[]> {
  await sleep(300);
  return recentEvents;
}

// ------- Revenue APIs (used only for /revenue) -------

export async function getRevenueByPlan(): Promise<RevenueByPlanPoint[]> {
  await sleep(300);
  return revenueByPlan;
}

export async function getSubscriptions(): Promise<Subscription[]> {
  await sleep(300);
  return subscriptions;
}
