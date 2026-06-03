import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { scrollToSection } from "@/lib/scroll";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: CTAButtonProps) {
  const classes = cn(
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variant === "ghost" && "btn-ghost",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  // Hash links: use custom smooth scroll with navbar offset (Lenis aware)
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={classes}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(href);
        }}
      >
        {children}
      </a>
    );
  }

  // Internal page links
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
