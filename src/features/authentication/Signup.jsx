import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  function signupRoute() {
    navigate("/signup");
  }

  return (
    <div>
      <button onClick={() => signupRoute}>Signup</button>
    </div>
  );
}

export default Signup;
