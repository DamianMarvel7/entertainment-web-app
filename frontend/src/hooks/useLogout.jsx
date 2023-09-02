import { useContext } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { MovieContext } from "../contexts/MovieContext";
// import { useWorkoutContext } from "./useWorkoutContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { setFilteredMovies } = useContext(MovieContext);
  //   const { dispatch: workoutsDispatch } = useWorkoutContext();

  const logout = () => {
    // remove user from storafe
    localStorage.removeItem("user");

    // dispatch
    dispatch({ type: "LOGOUT" });
    setFilteredMovies(null);
    // workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};
