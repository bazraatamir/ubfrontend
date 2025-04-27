import AuthRoutes from "../features/auth/routes/authRouter";
import publicRoutes from "../features/public/publicRoutes";
import ownerRoutes from "../features/restaurantOwner/OwnerRoutes";
import adminRoutes from "../features/admin/adminRoutes";
const appRoutes = [
  ...publicRoutes,
  ...ownerRoutes,
  ...AuthRoutes,
  ...adminRoutes,
];

export default appRoutes;
