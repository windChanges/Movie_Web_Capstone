import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

/* ================== API 1: HỆ THỐNG RẠP ================== */
export const fetchListTheater = createAsyncThunk(
  "listTheater/fetchListTheater",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.get("QuanLyRap/LayThongTinHeThongRap");
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/* ================== API 2: CỤM RẠP ================== */
export const fetchTheaterComplex = createAsyncThunk(
  "listTheater/fetchTheaterComplex",
  async (maHeThongRap, { rejectWithValue }) => {
    try {
      const result = await api.get(
        `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
      );
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/* ================== SLICE ================== */
const listTheaterSlice = createSlice({
  name: "listTheater",
  initialState: {
    loadingSystem: false,
    loadingComplex: false,
    listTheater: [],
    theaterComplex: [],


    error: null,
  },
  reducers: {
    clearTheaterComplex: (state) => {
      state.theaterComplex = [];
    },
  },
  extraReducers: (builder) => {
    builder
      /* ===== HỆ THỐNG RẠP ===== */
      .addCase(fetchListTheater.pending, (state) => {
        state.loadingSystem = true;
      })
      .addCase(fetchListTheater.fulfilled, (state, action) => {
        state.loadingSystem = false;
        state.listTheater = action.payload;
      })
      .addCase(fetchListTheater.rejected, (state, action) => {
        state.loadingSystem = false;
        state.error = action.payload;
      })

      /* ===== CỤM RẠP ===== */
      .addCase(fetchTheaterComplex.pending, (state) => {
        state.loadingComplex = true;
      })
      .addCase(fetchTheaterComplex.fulfilled, (state, action) => {
        state.loadingComplex = false;
        state.theaterComplex = action.payload;
      })
      .addCase(fetchTheaterComplex.rejected, (state, action) => {
        state.loadingComplex = false;
        state.error = action.payload;
      })

  },
});

export const { clearTheaterComplex } = listTheaterSlice.actions;
export default listTheaterSlice.reducer;
