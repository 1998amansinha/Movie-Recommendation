import { useSelector } from "react-redux";
import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useRatedMovies from "../utils/hooks/useRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainConatiner from "./MainConatiner";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainConatiner />
          <SecondaryConatiner />
        </>
      )}
    </div>
  );
};

export default Browse;
