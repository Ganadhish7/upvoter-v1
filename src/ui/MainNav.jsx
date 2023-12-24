import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <li>
        <NavLink to="/dashboard">
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/user">
          <span>User</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings">
          <span>Settings</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/account">
          <span>Account</span>
        </NavLink>
      </li>
    </nav>
  );
}

export default MainNav;
