import { cn } from "@/lib/utils";

export function ComicLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("comic-label", className)}>{children}</span>;
}
