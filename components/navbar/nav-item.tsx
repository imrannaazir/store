"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Icon from "@/components/icon";

interface NavItemProps {
  route: {
    href: string;
    isActive: boolean;
    icon: string;
    label: string;
  };
}

const NavItem: React.FC<NavItemProps> = ({
  route: { href, icon, isActive, label },
}) => {
  const iconName = icon.trim(); //invoked  hook

  console.log(iconName);

  return (
    <Link
      key={href}
      href={href}
      className={cn(
        `
                text-sm
                font-medium
                transition-colors
                hover:text-black
                flex
                flex-col
                justify-center
                items-center 
                p-4 `,
        isActive
          ? "text-black border-b-[3px] border-b-primary"
          : "text-neutral border-b-[3px] border-b-transparent"
      )}
    >
      <Icon name={iconName} strokeWidth={1} />
      {label}
    </Link>
  );
};

export default NavItem;
