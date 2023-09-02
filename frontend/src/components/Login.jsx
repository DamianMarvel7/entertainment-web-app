import { Form, Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignup";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authen, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const auth = { email, password, repeatPassword };

    await authen(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login container">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <form className="login-form grid flow container" onSubmit={handleSubmit}>
        <p className="headingL">Log In</p>
        <input
          type="text"
          placeholder="Email address"
          className="naked"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          className="naked"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="naked btn">
          Log in to your account
        </button>
        <p className="form-text">
          <span>Don't have an account? </span>
          <span className="clr-primary pointer">
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
