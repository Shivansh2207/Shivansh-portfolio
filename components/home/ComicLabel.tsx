import { cn } from "@/lib/utils";
import "./comic-label.css";

export function ComicLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("comic-label", className)}>{children}</span>;
}
