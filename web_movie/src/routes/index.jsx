import { Route } from "react-router-dom";
import HomeTemplate from "../pages/HomeTemplate";
import Home from "../pages/HomeTemplate/Home";
import ListMovie from "../pages/HomeTemplate/ListMovie";
import ListTheater from "../pages/HomeTemplate/ListTheater";
import About from "../pages/HomeTemplate/About";
import Support from "../pages/HomeTemplate/Support";
import PageNotFound from "../pages/PageNotFound";
import DetailMovie from "../pages/HomeTemplate/DetailMovie";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AdminTemplate from "../pages/AdminTemplate";
import BookingMana from "../pages/AdminTemplate/Booking"
import MoviesMana from "../pages/AdminTemplate/Movies"
import UsersMana from "../pages/AdminTemplate/Users"
const routes = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      {
        path: "",
        element: Home,
      },
      {
        path: "list-movie",
        element: ListMovie,
      },
      {
        path: "list-theater",
        element: ListTheater,
      },
      {
        path: "about",
        element: About,
      },
      {
        path: "support",
        element: Support,
      },
      {
        path: "detail-movie/:id",
        element: DetailMovie,
      },
    ],
  },
   {
    path: "admin",
    element: AdminTemplate,
    nested: [
      {
        path: "",
        element: MoviesMana,
      },
      {
        path: "booking",
        element: BookingMana,
      },
      {
        path: "users",
        element: UsersMana,
      },
    ],
  },
  {
    path: "login",
    element: Login,
  },
   {
    path: "register",
    element: Register,
  },
  {
    path: "*",
    element: PageNotFound,
  },
  // {
  //   path: "*",
  //   element: PageNotFound,
  //   nested: [],
  // },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((nestRouted) => (
            <Route
              key={nestRouted.path}
              path={nestRouted.path}
              element={<nestRouted.element />}
            ></Route>
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
