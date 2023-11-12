import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  isSmall?: boolean;
  src?: string;
  name?: string;
  username?: string;
}

const UserAvatar = React.forwardRef<HTMLDivElement, UserAvatarProps>(
  (
    {
      className,
      isSmall = false,
      src,
      name = "user1",
      username = "sheriffsalman",
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn("w-full flex items-center gap-x-3", className)}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "relative rounded-full overflow-hidden",
            isSmall ? "h-8 w-8" : "h-10 w-10"
          )}
        >
          <Image src={src ? src : "/noavatar.png"} alt="avatar" fill />
        </div>
        {!isSmall && (
          <div>
            <h2 className="font-bold">{name}</h2>
            <p className="text-text-soft text-xs">{username}</p>
          </div>
        )}
      </div>
    );
  }
);

UserAvatar.displayName = "UserAvatar";

export { UserAvatar };
