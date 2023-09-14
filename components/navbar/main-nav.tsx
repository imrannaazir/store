"use client";

import { usePathname } from "next/navigation";

import { Category } from "@/types/types";
import NavItem from "./nav-item";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { onAddCategories } from "@/redux/features/offCanvasSlice";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  const homeRoute = {
    href: "/",
    isActive: pathname === "/",
    icon: "home",
    label: "For You",
  };
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

  if (routes) {
    dispatch(onAddCategories([homeRoute, ...routes]));
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
