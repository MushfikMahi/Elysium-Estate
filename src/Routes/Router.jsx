import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root";
import Login from "../Login/Login";
import EstateDetails from "../Home/Estates/EstateDetails";
import Register from "../Register/Register";
import PrivateDetail from "../PrivateRoute/PrivateDetail";
import Profile from "../PrivateRoute/Profile";
import About from "../About/About";
import ErrorPage from "../ErrorPage/ErrorPage";
import UpdateProfile from "../PrivateRoute/UpdateProfile";
import Testimony from "../PrivateRoute/Testimony";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateDetail>
            <EstateDetails></EstateDetails>
          </PrivateDetail>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateDetail>
            <Profile></Profile>
          </PrivateDetail>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateDetail>
            <UpdateProfile></UpdateProfile>
          </PrivateDetail>
        ),
      },
      {
        path: "/testimony",
        loader: () => fetch("/testimonials.json"),
        element: (
          <PrivateDetail>
            <Testimony></Testimony>
          </PrivateDetail>
        ),
      },
    ],
  },
]);

export default router;
