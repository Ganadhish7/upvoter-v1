import { useState } from "react";
import { useLogin } from "./userLogin";

// import { login } from "../../services/apiAuth";

function LoginForm() {
  const [email, setMail] = useState("alex@gmail.com");
  const [password, setPassword] = useState("Pass@1234");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setMail("");
          setPassword("");
        },
      },
    );
  }
  return (
    <div className=" flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className=" bg-slate-200 w-96 h-80 p-10 space-y-2 flex flex-col justify-center text-left rounded-lg text-lg">
          <div>
            <label htmlFor="email">Username</label>
            <input
              className=" w-full rounded-md p-1"
              type="email"
              name="email"
              value={email}
              autoComplete="username"
              onChange={(e) => setMail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label>
            <input
              className=" w-full rounded-md p-1"
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className=" relative top-3">
            <button
              className=" w-full bg-black text-white rounded-full p-1 hover:bg-slate-600"
              type="submit"
              disabled={isLoading}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
