import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";
import FilterRestaurant from "./pages/web-filter-restaurant";
import Menu from "./pages/Menu";
const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{index: true, element: <Home />}],
  },
  {
    path: "/Menu",
    element: <Menu />,
  },
  {path: "restaurants/:id", element: <RestaurantPage />},
  {path: "restaurants_filter", element: <FilterRestaurant />},
];

export default publicRoutes;
