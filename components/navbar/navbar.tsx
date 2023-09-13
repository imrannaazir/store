import Container from "@/components/ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="">
      <Container>
        <div
          className="
        relative 
        px-4 
        sm:px-6 
        lg:px-8 
        flex 
        items-center "
        >
          <MainNav data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
