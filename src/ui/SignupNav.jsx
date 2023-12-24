import { NavLink } from "react-router-dom";

function SignupNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup">
            <span>Signup</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SignupNav;
