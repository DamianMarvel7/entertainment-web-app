import iconPlay from "../assets/icon-play.svg";
import Bookmark from "./Bookmark";
import MovieText from "./MovieText";

const RecommendedDetails = ({ movie }) => {
  return (
    <div className="recommended">
      <div className="movieDetails grid">
        <div className="play-wrapper flex pointer">
          <img src={iconPlay} alt="" className="icon-play" />
          <p className="headingXS">Play</p>
        </div>
        <Bookmark movie={movie} />
        <picture className="movie-img">
          <source
            srcSet={`./src/${movie.thumbnail.regular.medium}`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`./src/${movie.thumbnail.regular.large}`}
            media="(min-width: 1440px)"
          />
          <img
            src={`./src/${movie.thumbnail.regular.small}`}
            alt="Image description"
            className="movie-img"
          />
        </picture>
      </div>
      <div className="movie-content container">
        <MovieText movie={movie} />
        <p className="headingXS">{movie.title}</p>
      </div>
    </div>
  );
};

export default RecommendedDetails;
