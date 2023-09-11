import { Category } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

console.log(URL);

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  const data = await res.json;
  console.dir(data, "<<<<<<<<<<<<>>>>>>>>>>>>");

  return res.json();
};

export default getCategories;
