// src/components/Header.tsx
import { HiOutlineUser, HiOutlineMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Search", to: "/search" },
  { label: "Sign in", to: "/login" },
  { label: "Sign up", to: "/register" },
  { label: "Cart", to: "/cart" },
];

const Header = () => {
  return (
    <>
      {/* Main Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-serif font-bold tracking-wide text-[#294145] whitespace-nowrap">
            NAVGRIHINI
          </Link>
          {/* Centered Menu */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex gap-8 items-center text-lg font-medium">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#294145] border-b-2 border-[#294145] pb-1"
                        : "text-gray-700 hover:text-[#294145] transition-all"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* Right: Icons */}
          <div className="flex gap-6 items-center text-xl text-[#294145] ml-2">
            <Link to="/search" aria-label="Search">
              <HiOutlineMagnifyingGlass />
            </Link>
            <Link to="/login" aria-label="Login">
              <HiOutlineUser />
            </Link>
            <Link to="/cart" aria-label="Cart">
              <HiOutlineShoppingBag />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
