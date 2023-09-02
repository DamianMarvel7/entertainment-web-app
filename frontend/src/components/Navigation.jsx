import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navigation = () => {
  const { selectedNav, setSelectedNav } = useContext(MovieContext);
  const { logout } = useLogout();

  const handleNavIconClick = (selectedNav) => {
    setSelectedNav(selectedNav);
  };

  const handleClick = () => {
    logout();
  };

  const handleAvatar = () => {
    const logoutBtn = document.querySelector(".logout-btn");
    logoutBtn.classList.toggle("opened");
  };
  return (
    <header className="grid">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav className="primary-nav flex">
        {/* <Link to="/login">login</Link>
        <Link to="/signup">signup</Link> */}
        <div
          className={`nav-icon home-icon ${
            selectedNav === "home" ? "selected" : ""
          }`}
          onClick={() => handleNavIconClick("home")}
        ></div>
        <div
          className={`nav-icon movies-icon ${
            selectedNav === "movies" ? "selected" : ""
          }`}
          onClick={() => handleNavIconClick("movies")}
        ></div>
        <div
          className={`nav-icon series-icon ${
            selectedNav === "series" ? "selected" : ""
          }`}
          onClick={() => handleNavIconClick("series")}
        ></div>
        <div
          className={`nav-icon bookmark-icon ${
            selectedNav === "bookmark" ? "selected" : ""
          }`}
          onClick={() => handleNavIconClick("bookmark")}
        ></div>
      </nav>
      <div className="profile-container">
        <img
          src={avatar}
          alt=""
          className="avatar-img"
          onClick={handleAvatar}
        />
        <button onClick={handleClick} className="logout-btn btn naked">
          Log out
        </button>
      </div>
    </header>
  );
};

export default Navigation;
