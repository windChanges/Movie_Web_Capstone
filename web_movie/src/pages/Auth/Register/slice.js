import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export const registerService = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const payload = {
        ...user,
        maNhom: "GP01", // GÁN CỨNG Ở ĐÂY
      };

      const response = await api.post(
        "QuanLyNguoiDung/DangKy",
        payload
      );

      return response.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    resetRegister: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerService.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetRegister } = registerSlice.actions;
export default registerSlice.reducer;
