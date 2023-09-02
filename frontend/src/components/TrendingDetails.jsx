import iconPlay from "../assets/icon-play.svg";
import Bookmark from "./Bookmark";
import MovieText from "./MovieText";

const TrendingDetails = ({ movie }) => {
  return (
    <div className="movieDetails movie grid">
      <div className="play-wrapper flex pointer">
        <img src={iconPlay} alt="" className="icon-play" />
        <p className="headingXS">Play</p>
      </div>
      <Bookmark movie={movie} />
      <picture className="movie-img">
        <source
          srcSet={`./${movie.thumbnail.trending.large}`}
          media="(min-width: 720px)"
        />

        <img
          src={`./${movie.thumbnail.trending.small}`}
          alt="Image description"
          className="movie-img"
        />
      </picture>

      <div className="movie-content trending-content container">
        <MovieText movie={movie} />
        <p className="headingXS">{movie.title}</p>
      </div>
    </div>
  );
};

export default TrendingDetails;
