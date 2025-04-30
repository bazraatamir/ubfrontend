import {Navigate} from "react-router-dom";
import Layout from "./layouts/layouts";
import SuperAdminPanel from "./pages/SuperAdminPanel";
import RestaurantPage from "./pages/restaurant";
import SpecialRestaurant from "./pages/special";
import ContactPage from "./pages/ContactPage";
const adminRoutes = [
  {
    path: "/admin",
    element: <Layout />,
    children: [
      {index: true, element: <Navigate to='/admin/dashboard' />}, // Redirect to Manage Page
      {path: "dashboard", element: <SuperAdminPanel />}, // "/owner/add-restaurant"
      {path: "restaurants", element: <RestaurantPage />}, // "/owner/add-restaurant"
      {path: "special", element: <SpecialRestaurant />}, // "/owner/add-restaurant"
      {path: "contacts", element: <ContactPage />}, // Contact organizations page
    ],
  },
];

export default adminRoutes;
