import iconSearch from "../assets/icon-search.svg";
import TrendingDetails from "./TrendingDetails";
import RecommendedDetails from "./RecommendedDetails";
import useContent from "../hooks/useContents";

const Content = () => {
  const {
    headingText,
    searchTerm,
    selectedNav,
    trendingMovies,
    recommendedMovies,
    handleInputChange,
  } = useContent();

  return (
    <>
      <main className="content">
        <div className="search-bar flex">
          <img src={iconSearch} alt="" />
          <input
            type="text"
            placeholder="Search for movies"
            className="search-input naked"
            onChange={handleInputChange}
          />
        </div>
        {searchTerm ? (
          <p className="headingL">
            Found {recommendedMovies.length} result for {searchTerm}
          </p>
        ) : (
          ""
        )}

        <div className="content flow">
          {selectedNav === "home" ? (
            <section className="trending">
              {trendingMovies.length != 0 ? (
                <p className="headingL">Trending</p>
              ) : (
                ""
              )}
              <div className="trending-list grid">
                {trendingMovies.map((trendingMovie) => {
                  return (
                    <TrendingDetails
                      key={trendingMovie.title}
                      movie={trendingMovie}
                    />
                  );
                })}
              </div>
            </section>
          ) : (
            <></>
          )}

          {selectedNav === "home" ? (
            <section className="recommended">
              {recommendedMovies.filter((movie) => !movie.isTrending).length !=
              0 ? (
                <p className="headingL">{headingText}</p>
              ) : (
                ""
              )}
              <div className="recommended-list grid">
                {recommendedMovies
                  .filter((movie) => !movie.isTrending)
                  .map((movie) => {
                    return (
                      <RecommendedDetails key={movie.title} movie={movie} />
                    );
                  })}
              </div>
            </section>
          ) : (
            <></>
          )}
          {selectedNav === "movies" || selectedNav === "series" ? (
            <section className="recommended">
              {recommendedMovies.length != 0 ? (
                <p className="headingL">{headingText}</p>
              ) : (
                ""
              )}
              <div className="recommended-list grid">
                {recommendedMovies.map((movie) => {
                  return <RecommendedDetails key={movie.title} movie={movie} />;
                })}
              </div>
            </section>
          ) : (
            <></>
          )}
          {selectedNav === "bookmark" ? (
            <section className="recommended">
              {recommendedMovies.filter((movie) => movie.category == "Movie")
                .length != 0 ? (
                <p className="headingL">{headingText} Movies</p>
              ) : (
                ""
              )}
              <div className="recommended-list grid">
                {recommendedMovies
                  .filter((movie) => movie.category == "Movie")
                  .map((movie) => {
                    return (
                      <RecommendedDetails key={movie.title} movie={movie} />
                    );
                  })}
              </div>
              {recommendedMovies.filter(
                (movie) => movie.category == "TV Series"
              ).length != 0 ? (
                <p className="headingL">{headingText} TV Series</p>
              ) : (
                ""
              )}
              <div className="recommended-list grid">
                {recommendedMovies
                  .filter((movie) => movie.category == "TV Series")
                  .map((movie) => {
                    return (
                      <RecommendedDetails key={movie.title} movie={movie} />
                    );
                  })}
              </div>
            </section>
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
};

export default Content;
