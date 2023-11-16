import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import SidebarItemLink from "./sidebar-item-link";

interface SidebarItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  list: {
    title: string;
    path: string;
    icon: IconType;
  }[];
}

const SidebarItems = React.forwardRef<HTMLDivElement, SidebarItemsProps>(
  ({ title, list, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="py-3">
        <div className="py-3">{title}</div>
        <div className="flex flex-col p-2 gap-y-3">
          {list.map((item) => (
            <SidebarItemLink
              href={item.path}
              title={item.title}
              icon={item.icon}
              key={item.title}
            />
          ))}
        </div>
      </div>
    );
  }
);

SidebarItems.displayName = "SidebarItems";

export default SidebarItems;
