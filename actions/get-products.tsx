/* import { Product } from "@/types/types";
import qs from "query-string";

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query?.colorId,
      sizeId: query?.sizeId,
      categoryId: query?.categoryId,
      isFeatured: query?.isFeatured,
    },
  });

  const res = await fetch(url);
  const products = await res.json();
  console.log("<<<<<<<<<<", products, "for", url, ">>>>>>>>>>>>>");
  return products;
};

export default getProducts;
 */

import { Product } from "@/types/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  console.log(url);

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
