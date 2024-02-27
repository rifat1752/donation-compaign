import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar justify-between items-center bg-base-200">
        <Logo></Logo>
        <div className="flex-none">
        <ul className="flex gap-5 px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline font-bold text-red-500" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " underline font-bold text-red-500" : ""
              }
            >
            Donation
            </NavLink>
            
        </li>
       
        </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
