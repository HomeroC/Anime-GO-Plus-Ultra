import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useContext } from "react";
import App from "./App";
import HomeScreen from "./Screens/HomeScreen";
import Watchlist from "./Screens/Watchlist";
import Auth from "./Screens/Auth";
import Details from "./Screens/Details";
import AuthContext from "./state/AuthContext";

function Router() {
  const { state } = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      
      path: "login",
      element:  <Auth />  ,
    },
    {
      path: "/",
      element: <App />  ,
      children: [
        {
          index: true,
          path: "home",
          element: <HomeScreen />,
        },
        {
          path: "watchlist",
          element: <Watchlist />,
        },

        {
          path: "details/:id",
          element: <Details />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
