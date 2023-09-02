import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import iconBookmarkFull from "../assets/icon-bookmark-full.svg";
import iconBookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import { useAuthContext } from "../hooks/useAuthContext";

const Bookmark = ({ movie }) => {
  const { setBookmark, bookmarkMovies, userId } = useContext(MovieContext);

  // // console.log(movie);
  // const exist = bookmarkMovies.filter(
  //   (bookmarkMovie) => movie.id == bookmarkMovie.id
  // )[0];
  // const isBookmarked = exist ? exist.isBookmarked : false;

  return (
    <div
      className="icon-bookmark pointer"
      onClick={() => setBookmark(movie.id, movie.isBookmarked)}
      style={{
        backgroundImage: movie.isBookmarked
          ? `url(${iconBookmarkFull})`
          : `url(${iconBookmarkEmpty})`,
      }}
    ></div>
  );
};

export default Bookmark;
