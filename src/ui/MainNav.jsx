import { NavLink } from "react-router-dom";
import Logout from "../features/authentication/Logout";

function MainNav() {
  return (
    <div className="">
      <nav className=" bg-red-400 sm:h-screen sm:text-2xl list-none text-center rounded-lg p-10 transition-all">
        <ul className=" flex flex-col gap-10 uppercase font-bold text-white ">
          <li className=" rounded-full p-4 hover:bg-slate-600 hover:scale-105 ease-in-out duration-100">
            <NavLink to="/dashboard">
              <p>Home</p>
            </NavLink>
          </li>
          <li className=" rounded-full p-4 hover:bg-slate-600 hover:scale-105 ease-in-out duration-100">
            <NavLink to="/user">
              <p>User</p>
            </NavLink>
          </li>
          <li className=" rounded-full p-4 hover:bg-slate-600 hover:scale-105 ease-in-out duration-100">
            <NavLink to="/settings">
              <p>Settings</p>
            </NavLink>
          </li>
          <li className=" rounded-full p-4 hover:bg-slate-600 hover:scale-105 ease-in-out duration-100">
            <NavLink to="/account">
              <p>Account</p>
            </NavLink>
          </li>
        </ul>
        <Logout />
      </nav>
    </div>
  );
}

export default MainNav;
