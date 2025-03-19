import {Navigate} from "react-router-dom";
import Layout from "./layouts/Layout";
import AddRestaurantPage from "./pages/AddRestaurantPage";
import OwnerRestaurantPage from "./pages/RestaurantPage";
import AddSalbar from "./pages/AddSalbar";
import Nemsensalbar from "./pages/Nemsensalbar";


const ownerRoutes = [
  {
    path: "/owner",
    element: <Layout />,
    children: [
      {index: true, element: <Navigate to='/owner/managerestaurant' />}, // Redirect to Manage Page
      {path: "addrestaurant", element: <AddRestaurantPage />}, // "/owner/add-restaurant"
      {path: "managerestaurant", element: <OwnerRestaurantPage />}, // "/owner/manage-restaurant"
      {path: "addsalbar", element: <AddSalbar />}, // "/owner/add-salbar"
      {path: "nemsensalbar", element: <Nemsensalbar />}, // "/owner/nemsensalbar"
    ],
  },
];

export default ownerRoutes;
