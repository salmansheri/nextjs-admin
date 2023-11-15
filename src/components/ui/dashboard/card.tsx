"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { IconType } from "react-icons";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  title: string;
  price: number;
  percentage: string;
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
          " flex flex-col gap-5 bg-background-soft p-5 rounded-md shadow",
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
          <p className="text-sm">
            <span className="text-green-500">{percentage}</span> more the
            previos week
          </p>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
