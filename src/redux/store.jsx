import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import restaurantReducer from "./restaurantSlice";

const store = configureStore({
  reducer: { auth: authReducer, restaurant: restaurantReducer },
});

export default store;
