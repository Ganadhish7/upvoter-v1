import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

// full page spinner height : 100vh bg: flex, align items center , justify center

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //2. if there is no autenticated user, redirect to the /login/signup

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/signup");
  }, [isAuthenticated, isLoading, navigate]);

  //3. while loading , show a spinner
  // if (isLoading) return; // return spinner

  //4. if there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
