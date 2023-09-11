"use client";

import { usePathname } from "next/navigation";
import * as lucide from "lucide-react";

import { Category } from "@/types/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MainNavProps {
  data: Category[];
  x: string;
}

const MainNav: React.FC<MainNavProps> = ({ data, x }) => {
  const pathname = usePathname();
  console.log(data, "data,,,,,,,,,,,,,,,");

  const Mew = lucide[x];
  const routes = data?.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    isActive: pathname === `/category/${route.id}`,
    icon: `lucide.${x}`,
  }));

  return (
    <nav
      className="
  mx-6
  flex
  items-center
  space-x-4
  lg:space-x-6"
    >
      {routes?.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            `
                text-sm
                font-medium
                transition-colors
                hover:text-black`,
            route.isActive ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
          {/* <route.icon /> */}
          <Mew />
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
