import { useState, useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";

const useContent = () => {
  const { movies, filterMovies, selectedNav } = useContext(MovieContext);

  const [headingText, setHeadingText] = useState("Recommended for you");
  const [searchTerm, setSearchTerm] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const handleInputChange = (e) => {
    const keyword = e.target.value;
    setSearchTerm(keyword);
    filterMovies(keyword);
  };

  useEffect(() => {
    if (movies) {
      let filteredMovies = movies;
      setHeadingText("Recommended for you");

      if (selectedNav === "movies") {
        filteredMovies = filteredMovies.filter(
          (movie) => movie.category === "Movie"
        );
        setHeadingText("Movies");
      } else if (selectedNav === "series") {
        filteredMovies = filteredMovies.filter(
          (movie) => movie.category === "TV Series"
        );
        setHeadingText("TV Series");
      }

      const trending = filteredMovies.filter((movie) => movie.isTrending);
      const recommended = filteredMovies.filter((movie) => !movie.isTrending);

      setTrendingMovies(trending);
      setRecommendedMovies(recommended);

      if (selectedNav === "bookmark") {
        filteredMovies = filteredMovies.filter((movie) => movie.isBookmarked);
        setHeadingText("Bookmark");
        setRecommendedMovies(filteredMovies);
      }
    }
  }, [movies, selectedNav]);

  return {
    headingText,
    searchTerm,
    selectedNav,
    trendingMovies,
    recommendedMovies,
    handleInputChange,
  };
};

export default useContent;
