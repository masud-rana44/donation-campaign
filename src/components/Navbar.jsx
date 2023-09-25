import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="absolute w-full top-0 left-0 z-10">
      <div className="container px-4 lg:px-0  mx-auto flex items-center justify-between py-12">
        <Logo />
        <ul className="items-center gap-12 text-lg hidden md:flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/donation">Donation</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
        </ul>
        <div className="md:hidden">
          <HiMenu size={28} />
        </div>
      </div>
    </nav>
  );
};
