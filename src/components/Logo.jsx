import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <img
        src="./Logo.png"
        alt="Logo"
        className="h-10 md:h-16 object-contain"
      />
    </Link>
  );
};
