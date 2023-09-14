"use client";

import { onChange } from "@/redux/features/offCanvasSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import IconButton from "../ui/icon-button";
import { Menu } from "lucide-react";

const HamburgerMenuBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onOpenChange = () => {
    dispatch(onChange());
  };
  return (
    <IconButton icon={<Menu />} onClick={onOpenChange} className="lg:hidden" />
  );
};

export default HamburgerMenuBar;
