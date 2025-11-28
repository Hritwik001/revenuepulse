"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type KpiCardProps = {
  title: string;
  value: string;
  description?: string;
  className?: string;
};

export function KpiCard({
  title,
  value,
  description,
  className,
}: KpiCardProps) {
  return (
    <Card
      className={cn(
        "h-full rounded-xl border bg-card/80 backdrop-blur-sm",
        "transition-all duration-200",
        "hover:shadow-md hover:-translate-y-0.5",
        "flex flex-col justify-between",
        className
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="text-2xl font-semibold tracking-tight">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
