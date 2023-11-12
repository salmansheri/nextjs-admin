"use client";

import Link, { type LinkProps } from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemLinkProps extends LinkProps {
  title: string;

  icon: IconType;
}

const SidebarItemLink = React.forwardRef<LinkProps, SidebarItemLinkProps>(
  ({ title, icon: Icon, href, ...props }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        {...props}
        className={cn(
          "flex items-center gap-x-1 p-2 rounded-md hover:bg-white/10",
          isActive && "bg-white/20 hover:bg-none"
        )}
      >
        <Icon color="white" size={20} />

        {title}
      </Link>
    );
  }
);

SidebarItemLink.displayName = "SidebarItemLink";

export default SidebarItemLink;
