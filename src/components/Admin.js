import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/store/userSlice";
import { signOut } from "firebase/auth";
import { adminAuth } from "../utils/firebase";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useNowPlayingMovies from "../utils/hooks/useTvShows";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = async () => {
    await signOut(adminAuth);
    dispatch(removeUser());
    navigate("/admin-login");
  };

  // Fetch movies using custom hooks
  usePopularMovies();
  useNowPlayingMovies();
  useUpcomingMovies();

  // Get the movie categories from Redux
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
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
      <header className="bg-[#1f1f1f] px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-red-500">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <p className="text-gray-300 text-sm hidden sm:block">
            {user?.displayName || "Admin"}
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Body Content */}
      <div className="admin-dashboard px-6 py-4">
        <h1 className="text-3xl font-semibold text-white">
          Dashboard Overview
        </h1>
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
