"use client";

import Currency from "@/components/ui/Currency";
import Button from "@/components/ui/button";
import { removeAll } from "@/redux/features/cartSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Summary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      dispatch(removeAll());
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [dispatch, searchParams]);

  const onCheckout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      window.location = response.data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className="
                    mt-16
                    rounded-lg
                    bg-gray-50
                    px-4
                    sm:p-6
                    lg:col-span-5
                    lg:mt-0
                    lg:p-8
        "
    >
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-green-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>

      <Button
        onClick={onCheckout}
        disabled={items.length === 0 || isLoading}
        className="w-full mt-6"
      >
        {isLoading ? "Loading.." : "Checkout"}
      </Button>
    </div>
  );
};

export default Summary;
