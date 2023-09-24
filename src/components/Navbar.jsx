import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="absolute w-full top-0 left-0">
      <div className="container mx-auto flex items-center justify-between py-12">
        <Logo />
        <ul className="flex items-center gap-6">
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
      </div>
    </nav>
  );
};
