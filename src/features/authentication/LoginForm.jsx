import { useState } from "react";
import { useLogin } from "./userLogin";
// import { login } from "../../services/apiAuth";

function LoginForm() {
  const [email, setMail] = useState("ganadhish@gmail.com");
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
      }
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={email}
            autoComplete="username"
            onChange={(e) => setMail(e.target.value)}
            disabled={isLoading}
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
