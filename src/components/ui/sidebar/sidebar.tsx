"use client";

import React from "react";
import { menuItems } from "@/lib/data";
import SidebarItems from "./sidebarItems";
import { UserAvatar } from "./user-avatar";
import { MdLogout } from "react-icons/md";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className="bg-background-soft p-4 h-full overflow-y-auto"
    >
      <UserAvatar src="/astronaut.png" />
      {menuItems.map((item) => (
        <SidebarItems key={item.title} title={item.title} list={item.list} />
      ))}
      <button className="flex items-center gap-x-2 hover:bg-white/10 w-full p-2 rounded-md transition">
        <MdLogout />
        Logout
      </button>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
