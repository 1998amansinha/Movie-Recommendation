import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import AdminLogin from "./AdminLogin";
import Admin from "./Admin";
import ProtectedAdminRoute from "./ProtectedAdminRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/admin-login",
      element: <AdminLogin />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedAdminRoute>
          <Admin />
        </ProtectedAdminRoute>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />;
    </div>
  );
};

export default Body;
