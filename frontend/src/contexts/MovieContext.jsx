import React, { createContext, useContext, useEffect, useState } from "react";
import moviesData from "../data/data.json";
import { useAuthContext } from "../hooks/useAuthContext";

export const MovieContext = createContext();

export function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState();
  const [filteredMovies, setFilteredMovies] = useState();
  const [bookmarkMovies, setBookmarkMovies] = useState([]);
  const [userId, setUserId] = useState();

  const [selectedNav, setSelectedNav] = useState("home");
  const { user } = useAuthContext();

  // console.log(user);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/movies", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      setMovies(json);
      setFilteredMovies(json);
    };

    if (user) {
      fetchWorkouts();
    }
  }, [user]);

  const filterMovies = (keyword) => {
    if (keyword.trim() === "") {
      resetFilter();
    } else {
      const filteredMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredMovies(filteredMovies);
    }
  };

  const setBookmark = async (id, isBookmarked) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, isBookmarked: !movie.isBookmarked } : movie
    );

    setMovies(updatedMovies);

    const response = await fetch("http://localhost:4000/api/movies/bookmark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ id }),
    });

    const json = await response.json();
    setUserId(json.user_id);
  };

  const resetFilter = () => {
    setFilteredMovies(movies);
  };

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  return (
    <MovieContext.Provider
      value={{
        movies: filteredMovies,
        setFilteredMovies,
        filterMovies,
        selectedNav,
        setSelectedNav,
        setBookmark,
        bookmarkMovies,
        userId,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContextProvider;
