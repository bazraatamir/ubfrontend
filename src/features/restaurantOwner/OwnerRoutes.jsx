import {Navigate} from "react-router-dom";
import Layout from "./layouts/Layout";
import AddRestaurantPage from "./pages/AddRestaurantPage";
import OwnerRestaurantPage from "./pages/RestaurantPage";

const ownerRoutes = [
  {
    path: "/owner",
    element: <Layout />,
    children: [
      {index: true, element: <Navigate to='/owner/manage-restaurant' />}, // Redirect to Manage Page
      {path: "addrestaurant", element: <AddRestaurantPage />}, // "/owner/add-restaurant"
      {path: "managerestaurant", element: <OwnerRestaurantPage />}, // "/owner/manage-restaurant"
    ],
  },
];

export default ownerRoutes;
