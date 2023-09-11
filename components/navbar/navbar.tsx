import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  const x = "Apple";

  return (
    <div className="border-b">
      <Container>
        <div
          className="
        relative 
        px-4 
        sm:px-6 
        lg:px-8 
        flex 
        items-center 
        h-16"
        >
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>

          <MainNav data={categories} x={x} />

          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
