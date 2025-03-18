import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";

const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {index: true, element: <Home />}, // "/"
      {path: "restaurants", element: <RestaurantPage />}, // "/restaurants"
    ],
  },
];

export default publicRoutes;
