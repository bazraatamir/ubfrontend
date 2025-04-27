import {Navigate} from "react-router-dom";
import Layout from "./layouts/Layout";
import AddRestaurantPage from "./pages/AddRestaurantPage";
import OwnerRestaurantPage from "./pages/AdminPanelPage";
import AddSalbar from "./components/AddSalbar";
import Nemsensalbar from "./pages/Nemsensalbar";
import Face from "./pages/face";
import SuperAdminPanel from "../admin/pages/SuperAdminPanel";
import AddMoreInfo from "./pages/moreInfo";
import AddMenu from "./pages/Menu";

const ownerRoutes = [
  {
    path: "/owner",
    element: <Layout />,
    children: [
      {index: true, element: <Navigate to='/owner/face' />}, // Redirect to Manage Page
      {path: "managerestaurant", element: <OwnerRestaurantPage />}, // "/owner/manage-restaurant"
      {path: "nemsensalbar", element: <Nemsensalbar />}, // "/owner/nemsensalbar"
      {path: "face", element: <Face />}, // "/owner/face"
      {path: "addMoreInfo", element: <AddMoreInfo />}, // "/owner/face"
      {path: "addMenu", element: <AddMenu />}, // "/owner/face"
    ],
  },
];

export default ownerRoutes;
