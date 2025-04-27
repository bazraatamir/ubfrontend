import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../../shared/axios"; // Create this to enable withCredentials
import {toast} from "react-toastify";

// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
};
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.post("/users/login", userData);

      toast.success("Амжилттай нэвтэрлээ!");
      console.log("Ss");

      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "Нэвтрэхэд алдаа гарлаа";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// Async thunk for registration
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.post("/users/register", userData);

      toast.success("Бүртгэл амжилттай!");
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "Бүртгэхэд алдаа гарлаа";
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

// Slice for auth
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      toast.info("Системээс гарлаа");
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
