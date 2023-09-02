import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const authen = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://entertainment-web-app-server.vercel.app/api/user/login-movie",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    console.log("Response Status:", response.status);

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the authContext
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { authen, isLoading, error };
};
