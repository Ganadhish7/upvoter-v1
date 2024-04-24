import { NavLink } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";

function Login() {

  return (
    <>
    <div className=" m-0 p-2">
      <NavLink to="/signup">
         <span>&larr; back to signup</span>
      </NavLink>
    </div>
    <div>
      <LoginForm />
    </div>
    </>
  );
}

export default Login;
