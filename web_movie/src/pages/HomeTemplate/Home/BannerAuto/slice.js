import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import api from "../../../../services/api"

const initialState = {
    loading: false,
    data: null,
    error: null,
};

export const fetchListBanner = createAsyncThunk(
    "listBanner/fetListBanner",
    async(__,{rejectWithValue})=>{
        try{
            const result = await api.get("QuanLyPhim/LayDanhSachBanner");
            console.log(result);
            return result.data.content;
        }catch(error){
            return rejectWithValue(error);
        }
    }
)

const listBannerSlice = createSlice({
    name: "listBannerSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchListBanner.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchListBanner.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchListBanner.rejected,(state,action)=>{
            state.loading = false;
            state.error = true;
        })
    }
})
export default listBannerSlice.reducer;
