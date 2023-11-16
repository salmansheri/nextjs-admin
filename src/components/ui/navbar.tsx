"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  MdOutlineChat,
  MdPublic,
  MdSearch,
  MdNotifications,
} from "react-icons/md";
import { cn } from "@/lib/utils";
import Card from "./dashboard/card";

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ className }, ref) => {
    const pathname = usePathname();
    return (
      <div
        ref={ref}
        className={cn("flex bg-background-soft lg:p-6 rounded-sm shadow")}
      >
        <div className="flex justify-between w-full">
          <h1 className="text-text-soft capitalize">
            {pathname.split("/").pop()}
          </h1>
          <div className="flex items-center gap-x-3">
            <div className="flex items-center relative">
              <MdSearch className="absolute left-2 hidden lg:block" />
              <input
                className="bg-white/10 p-1 rounded-md pl-7 w-44 hidden lg:block"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="flex gap-x-5">
              <MdOutlineChat size={20} />
              <MdNotifications size={20} />
              <MdPublic size={20} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
