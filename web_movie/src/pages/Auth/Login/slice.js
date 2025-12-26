import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

const userInfoString = localStorage.getItem("USER_LOGIN");
const data = userInfoString ? JSON.parse(userInfoString) : null;

const initialState = {
  loading: false,
  data,
  error: null,
};

export const authService = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "QuanLyNguoiDung/DangNhap",
        user
      );

      // Lưu user chung cho cả admin & client
      localStorage.setItem(
        "USER_LOGIN",
        JSON.stringify(response.data.content)
      );

      return response.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      localStorage.removeItem("USER_LOGIN");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authService.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(authService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
