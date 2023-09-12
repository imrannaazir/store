"use client";
import * as lucide from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import useIcon from "@/hooks/useIcon";

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
  const iconName = useIcon(icon);
  const CollectionIcon = lucide[iconName];

  return (
    <Link
      key={href}
      href={href}
      className={cn(
        `
                text-sm
                font-medium
                transition-colors
                hover:text-black`,
        isActive ? "text-black" : "text-neutral-500"
      )}
    >
      {label}

      <CollectionIcon />
    </Link>
  );
};

export default NavItem;
