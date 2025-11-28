"use client";

import { useQuery } from "@tanstack/react-query";
import { getRecentEvents } from "@/lib/api";
import type { ProductEvent } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function formatTime(dateString: string) {
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return dateString;
  return d.toLocaleString();
}

export function RecentEventsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recent-events"],
    queryFn: getRecentEvents,
  });

  if (isLoading) {
    return (
      <div className="py-6 text-sm text-muted-foreground">
        Loading recent events…
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="py-6 text-sm text-red-500">
        Failed to load recent events.
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="py-6 text-sm text-muted-foreground">
        No recent events.
      </div>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">
          Recent product events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((event: ProductEvent) => (
          <div
            key={event.id}
            className="flex flex-col gap-1 border-b last:border-b-0 pb-3 last:pb-0"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium">
                {event.customerName}
              </span>
              <span className="text-xs text-muted-foreground">
                {formatTime(event.createdAt)}
              </span>
            </div>
            <div className="text-xs text-muted-foreground">
              <span className="font-semibold">{event.type}</span>
              {event.metadata ? ` — ${event.metadata}` : null}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
