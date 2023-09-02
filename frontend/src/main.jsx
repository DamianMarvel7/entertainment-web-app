import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import MovieContextProvider from "./contexts/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <MovieContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MovieContextProvider>
  </AuthContextProvider>
);
