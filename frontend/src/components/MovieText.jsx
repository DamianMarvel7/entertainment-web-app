import iconMovies from "../assets/icon-category-movie.svg";
import iconSeries from "../assets/icon-category-tv.svg";

const MovieText = ({ movie }) => {
  const iconCategory = movie.category === "Movie" ? iconMovies : iconSeries;

  return (
    <div className="movie-text flex body2">
      <span>{movie.year}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3"
        height="3"
        viewBox="0 0 3 3"
        fill="none"
      >
        <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
      </svg>
      <img src={iconCategory} alt="" />
      <span>{movie.category}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3"
        height="3"
        viewBox="0 0 3 3"
        fill="none"
      >
        <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
      </svg>
      <span>{movie.rating}</span>
    </div>
  );
};

export default MovieText;
