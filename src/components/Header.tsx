// src/components/Header.tsx
import { HiBars3, HiOutlineUser, HiOutlineMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="max-w-screen-2xl flex justify-between items-center py-4 px-5 mx-auto text-black">
        <HiBars3
          className="text-2xl cursor-pointer mr-20 max-lg:mr-0 max-sm:text-xl"
          onClick={() => setIsSidebarOpen(true)}
        />

        <Link to="/" className="text-4xl font-light tracking-wide max-sm:text-3xl">
          NAVGRIHINI
        </Link>

        <div className="flex gap-4 items-center max-sm:gap-2">
          <Link to="/search" aria-label="Search">
            <HiOutlineMagnifyingGlass className="text-2xl max-sm:text-xl" />
          </Link>
          <Link to="/login" aria-label="Login">
            <HiOutlineUser className="text-2xl max-sm:text-xl" />
          </Link>
          <Link to="/cart" aria-label="Cart">
            <HiOutlineShoppingBag className="text-2xl max-sm:text-xl" />
          </Link>
        </div>
      </header>

      <SidebarMenu isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </>
  );
};

export default Header;
