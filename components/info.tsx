"use client";

import { Product as ProductType } from "@/types/types";
import Currency from "./ui/Currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItem } from "@/redux/features/cartSlice";

interface InfoProps {
  data: ProductType;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();
  const onAddToCard = () => {
    dispatch(addItem(data));
  };
  return (
    <div>
      <h1
        className="
                       text-3xl
                       font-bold
                       text-gray-900
        "
      >
        {data.name}
      </h1>

      <div
        className="
                    mt-3
                    flex
                    items-end
                    justify-between
      "
      >
        <p
          className="
                    text-2xl
                    text-gray-900      
        "
        >
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-6">
        {/* size */}
        <div className="flex flex-col gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>

        {/* color */}
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>

      {/* button */}
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCard} className="flex items-center gap-x-2">
          Add to Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
