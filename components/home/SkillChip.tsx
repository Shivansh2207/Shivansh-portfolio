import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function SkillChip({
  icon: Icon,
  children,
  accent,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  accent: "blue" | "red" | "cyan";
}) {
  return (
    <span className={cn("skill-chip", `skill-chip--${accent}`)}>
      <Icon size={15} aria-hidden="true" />
      {children}
    </span>
  );
}
