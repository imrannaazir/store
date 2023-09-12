"use client";

import { usePathname } from "next/navigation";
import * as lucide from "lucide-react";

import { Category } from "@/types/types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import NavItem from "./nav-item";
import { useEffect, useState } from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const homeRoute = {
    href: "/",
    isActive: pathname === "/",
    icon: "home",
    label: "For You",
  };
  // const Mew = lucide[x];
  const routes = data?.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    isActive: pathname === `/category/${route.id}`,
    icon: route.icon,
  }));
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <nav
      className="
  mx-6
  flex
  items-center
  space-x-4
  lg:space-x-6"
    >
      <NavItem route={homeRoute} />
      {routes?.map((route) => (
        <NavItem key={route.href} route={route} />
      ))}
    </nav>
  );
};

export default MainNav;
