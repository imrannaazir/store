import Container from "@/components/ui/container";
import Logo from "./logo";
import SearchBar from "./search-bar";
import Account from "./account";
import CartBag from "./cart-bag";
import HamburgerMenuBar from "./hamburger-menu-bar";

export const revalidate = 0;

const Header = () => {
  return (
    <Container>
      <div
        className="
        py-4
        px-4 
        sm:px-6 
        lg:px-8 
      flex
      gap-3
      items-center
    
    "
      >
        <HamburgerMenuBar />
        {/* <PreviewOffCanvas isOpen={isOpen} /> */}
        {/* <PreviewModal1 /> */}
        {/* logo */}
        <Logo className="hidden lg:block" />
        {/* search bar */}
        <SearchBar />
        {/* account */}
        <Account />
        {/* cart bag */}
        <CartBag />
      </div>
    </Container>
  );
};
export default Header;
