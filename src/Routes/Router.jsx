import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root";
import Login from "../Login/Login";
import EstateDetails from "../Home/Estates/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch("/data.json"),
      },
      // {
      //   path:"/register",
      //   element:<Register></Register>
      // }
    ],
  },
]);

export default router;
