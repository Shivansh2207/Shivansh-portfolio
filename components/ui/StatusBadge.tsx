import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={cn("status-badge", status === "Shipped" && "is-shipped")}>
      <span aria-hidden="true" />
      {status}
    </span>
  );
}
