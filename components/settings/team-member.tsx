export function TeamMemberCard({
  name,
  email,
  role,
}: {
  name: string;
  email: string;
  role: string;
}) {
  return (
    <div className="border rounded-md p-3 bg-card">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{email}</div>
      <div className="text-xs text-muted-foreground mt-1">{role}</div>
    </div>
  );
}
