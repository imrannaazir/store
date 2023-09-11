import Container from "@/components/ui/container";

import HamburgerMenuBar from "./hamburger-menu-bar";
import Logo from "./logo";
import SearchBar from "./search-bar";
import Account from "./account";
import CartBag from "./cart-bag";

export default function Header() {
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
        {/* logo */}
        <Logo />
        {/* search bar */}
        <SearchBar />
        {/* account */}
        <Account />
        {/* cart bag */}
        <CartBag />
      </div>
    </Container>
  );
}
