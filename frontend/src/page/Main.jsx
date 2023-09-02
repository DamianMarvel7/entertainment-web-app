import Navigation from "../components/Navigation";
import Content from "../components/Content";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Main = () => {
  return (
    <div>
      <div className="main container">
        <Navigation />
        <Content />
      </div>
    </div>
  );
};

export default Main;
