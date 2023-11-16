"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { IconType } from "react-icons";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  title: string;
  price: number;
  percentage: number;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, title, price, percentage, children, icon: Icon, ...props },
    ref
  ) => {
    return (
      <div
        {...props}
        className={cn(
          " flex flex-col gap-5 bg-background-soft p-5 rounded-md shadow  cursor-pointer hover:bg-white/10 transition-all duration-500 ease-linear",
          className
        )}
        ref={ref}
      >
        <span className="flex gap-5 item-center">
          <Icon size={20} />
          {title}
        </span>
        <div className="flex flex-col gap-y-5">
          <h1 className="text-3xl">{price}</h1>
          <p className="text-sm flex gap-1">
            <span
              className={cn(
                "flex items-center",
                percentage > 25 ? "text-green-500" : "text-red-500"
              )}
            >
              {`${percentage}% `}
              {percentage > 25 ? <MdArrowUpward /> : <MdArrowDownward />}
            </span>{" "}
            more the previos week
          </p>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
