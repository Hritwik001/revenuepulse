import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white">
      <div className="max-w-4xl w-full text-center space-y-8">
        
        {/* Hero */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          RevenuePulse
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern SaaS analytics dashboard for tracking MRR, retention,
          cohorts, and product usage — built with Next.js, shadcn/ui, and Recharts.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/overview"
            className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            Open Dashboard →
          </Link>
        </div>

        {/* Screenshot */}
        <div className="mt-12 border rounded-xl shadow-sm overflow-hidden">
          <Image
            src="/dashboard-preview.png"
            alt="Dashboard Preview"
            width={1200}
            height={800}
          />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Revenue Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Track MRR, plan breakdown, and subscription metrics.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Retention & Cohorts</h3>
            <p className="text-sm text-muted-foreground">
              View cohort patterns and retention curves over time.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg">Product Usage</h3>
            <p className="text-sm text-muted-foreground">
              Understand how customers interact with your product features.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
