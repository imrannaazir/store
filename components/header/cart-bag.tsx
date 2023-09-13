"use client";

import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsHandbag } from "react-icons/bs";

export default function CartBag() {
  const router = useRouter();
  const cart = useAppSelector((state) => state.cart);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <button
      onClick={() => router.push("/cart")}
      className="
  w-11
  h-11
  border
  border-gray-300
  text-gray-500
  bg-secondary/20
  flex
  items-center
  justify-center
  rounded-full
  relative
  "
    >
      <BsHandbag
        className="
    text-xl"
      />

      <div
        className="
      absolute
      w-5
      h-5
      rounded-full
      bg-primary
      text-white
      font-extrabold
      -top-1
      -right-1
      flex
      items-center
      justify-center
      text-xs
      "
      >
        <span className="">{cart.items.length}</span>
      </div>
    </button>
  );
}
