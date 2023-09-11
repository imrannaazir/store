"use client";
import { BiUser } from "react-icons/bi";

export default function MenuBottom() {
  return (
    <div
      className="
        w-full
        fixed
        bottom-0
        left-0
        p-4
        bg-primary
        
        "
    >
      <div
        className="
          border-t-[1px]
          border-white
          pt-4
          flex
          items-center
          gap-3
          "
      >
        <BiUser
          className="
            text-white"
        />

        <h4
          className="
            text-white
            text-sm"
        >
          Your Account
        </h4>
      </div>
    </div>
  );
}
