import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "comic" | "outline" | "text";
  className?: string;
  icon?: boolean;
};

export function Button({
  href,
  children,
  variant = "comic",
  className,
  icon = true,
}: ButtonProps) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      className={cn("button", `button--${variant}`, className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      {icon && <ArrowUpRightIcon aria-hidden="true" size={17} strokeWidth={2.2} />}
    </Link>
  );
}
