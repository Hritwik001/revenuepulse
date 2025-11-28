// data/customers.ts
import { Customer } from "@/lib/types";

export const customers: Customer[] = [
  {
    id: "c_1",
    name: "Acme Inc",
    email: "ops@acme.com",
    plan: "Pro",
    mrr: 499,
    status: "active",
    country: "US",
    createdAt: "2023-10-01",
    lastActiveAt: "2024-06-05",
  },
  {
    id: "c_2",
    name: "Beta Analytics",
    email: "admin@beta.io",
    plan: "Basic",
    mrr: 99,
    status: "active",
    country: "IN",
    createdAt: "2024-01-15",
    lastActiveAt: "2024-06-04",
  },
  {
    id: "c_3",
    name: "Nimbus Cloud",
    email: "cto@nimbus.cloud",
    plan: "Enterprise",
    mrr: 1999,
    status: "trial",
    country: "UK",
    createdAt: "2024-05-10",
    lastActiveAt: "2024-06-05",
  },
];
