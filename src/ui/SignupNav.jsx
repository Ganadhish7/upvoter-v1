import { NavLink } from "react-router-dom";

function SignupNav() {
  return (
    <div className=" bg-black text-white">
      <div className=" ">
        <nav className=" p-2">
          <ul className=" flex justify-evenly ">
            <li>
              <NavLink to="/login">
                <span>&larr; Login</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">
                <span>Signup</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SignupNav;
