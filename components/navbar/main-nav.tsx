"use client";

import { usePathname } from "next/navigation";
import * as lucide from "lucide-react";

import { Category } from "@/types/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NavItem from "./nav-item";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  // const Mew = lucide[x];
  const routes = data?.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    isActive: pathname === `/category/${route.id}`,
    icon: route.icon,
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
        <NavItem key={route.href} route={route} />
      ))}
    </nav>
  );
};

export default MainNav;
