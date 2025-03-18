import publicRoutes from "../features/public/publicRoutes";
import ownerRoutes from "../features/restaurantOwner/OwnerRoutes";

const appRoutes = [...publicRoutes, ...ownerRoutes];

export default appRoutes;
