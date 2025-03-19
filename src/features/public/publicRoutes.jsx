import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";
import FilterRestaurant from "./pages/web-filter-restaurant";

const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> }, // "/"
      { path: "restaurants", element: <RestaurantPage /> }, // "/restaurants"
      { path: "restaurants_filter", element: <FilterRestaurant /> }, // "/restaurants_filter"
    ],
  },
];

export default publicRoutes;
