import { Product } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getProduct = async (): Promise<Product> => {
  const res = await fetch(URL);

  return res.json();
};

export default getProduct;
