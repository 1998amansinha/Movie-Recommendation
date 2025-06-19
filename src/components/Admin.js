import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useNowPlayingMovies from "../utils/hooks/useTvShows";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import AdminHeader from "./AdminHeader";

const Admin = () => {
  const navigate = useNavigate();

  // Fetch movies using custom hooks
  usePopularMovies();
  useNowPlayingMovies();
  useUpcomingMovies();

  // Get the movie categories from Redux
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  // Calculate the total number of movies
  const totalMovies =
    (popularMovies ? popularMovies.length : 0) +
    (nowPlayingMovies ? nowPlayingMovies.length : 0) +
    (upcomingMovies ? upcomingMovies.length : 0);

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      {/* Header */}
      <AdminHeader />

      {/* Body Content */}
      <div className="px-6 py-4">
        <h1 className="text-3xl font-semibold text-white">
          Dashboard Overview
        </h1>
        <button
          onClick={() => navigate("/add-movies")}
          className="p-6 m-4 bg-red-500 rounded-lg hover:bg-red-300 hover:text-black hover:duration-500"
        >
          Add Movies
        </button>
        <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="stat-item bg-[#333] p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-red-500">Total Movies</h2>
            <p className="text-xl">{totalMovies}</p>
          </div>
          <div className="stat-item bg-[#333] p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-red-500">Popular Movies</h2>
            <p className="text-xl">{popularMovies?.length || 0}</p>
          </div>

          <div className="stat-item bg-[#333] p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-red-500">
              Now Playing Movies
            </h2>
            <p className="text-xl">{nowPlayingMovies?.length || 0}</p>
          </div>
          <div className="stat-item bg-[#333] p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-red-500">Upcoming Movies</h2>
            <p className="text-xl">{upcomingMovies?.length || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
