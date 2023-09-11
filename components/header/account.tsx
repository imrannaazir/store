"use client";

import { User2 } from "lucide-react";

export default function Account() {
  return (
    <div
      className={`
    hidden
    md:flex
    w-11
    h-11
    border
    border-gray-300
    text-gray-500
    items-center
    justify-center
    rounded-full`}
    >
      <User2
        className="
      text-xl"
      />
    </div>
  );
}
