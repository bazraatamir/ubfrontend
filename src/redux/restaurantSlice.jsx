import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logo: null,
  surroundingImages: [],
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
    addSurroundingImage: (state, action) => {
      state.surroundingImages.push(action.payload);
    },
    removeSurroundingImage: (state, action) => {
      state.surroundingImages = state.surroundingImages.filter(
        (img) => img !== action.payload
      );
    },
  },
});

export const { setLogo, addSurroundingImage, removeSurroundingImage } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
