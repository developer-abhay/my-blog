"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import React from "react";
import { AnchorHTMLAttributes } from "react";

const HeaderLink = ({
  children,
  href,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return (
    <a
      href={href}
      className={clsx(
        isActive ? "text-opacity-100" : "text-opacity-60",
        className
      )}
      rel="noopener noreferrer "
      {...props}
    >
      {children}
    </a>
  );
};

export default HeaderLink;
