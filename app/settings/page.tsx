"use client";

import { ApiKeyDisplay } from "@/components/settings/api-key-display";
import { TeamMemberCard } from "@/components/settings/team-member";
import { teamMembers } from "@/data/settings";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage account, API keys, and team access.
        </p>
      </div>

      {/* Account Section */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Account</h3>
        <div className="border rounded-md p-4 bg-card">
          <div className="font-medium text-lg">Hritwik Tiwary</div>
          <div className="text-sm text-muted-foreground">
            hritwik@example.com
          </div>
          <Badge className="mt-2" variant="secondary">
            Pro Plan
          </Badge>
        </div>
      </div>

      {/* API Keys */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">API Keys</h3>

        <ApiKeyDisplay
          label="Public API Key"
          value="pk_live_1234567890abcd"
        />

        <ApiKeyDisplay
          label="Secret API Key"
          value="sk_live_supersecretkey987654321"
          masked
        />
      </div>

      {/* Team Section */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Team</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.email}
              name={member.name}
              email={member.email}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
