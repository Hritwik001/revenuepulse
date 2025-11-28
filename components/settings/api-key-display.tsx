"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ApiKeyDisplay({
  label,
  value,
  masked = false,
}: {
  label: string;
  value: string;
  masked?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const displayValue = masked ? value.replace(/.(?=.{4})/g, "•") : value;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="flex items-center justify-between border rounded-md p-3 bg-card">
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="font-mono text-sm">{displayValue}</span>
      </div>
      <Button size="sm" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}
