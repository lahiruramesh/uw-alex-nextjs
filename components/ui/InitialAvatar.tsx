"use client";

import InitialAvatarProps from "@/app/types/components/ui/InitialAvatar";
import { cn } from "@/lib/utils";

const InitialAvatar: React.FC<InitialAvatarProps> = ({ name, size = 40, className }) => {
    return (
        <div
            className={cn("flex items-center justify-center rounded-full bg-gray-200 text-gray-700", className)}
            style={{ width: size, height: size }}
        >
            {name.charAt(0)}
        </div>
    );
};

export default InitialAvatar;
