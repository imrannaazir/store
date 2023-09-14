"use client";

import PreviewOffCanvas from "@/components/header/mobile-sidebar";
import { useEffect, useState } from "react";

const MobileSidebarProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <PreviewOffCanvas />
    </>
  );
};

export default MobileSidebarProvider;
