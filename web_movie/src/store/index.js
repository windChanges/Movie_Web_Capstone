import { configureStore } from "@reduxjs/toolkit";
import listBannerReducer from "../pages/HomeTemplate/Home/BannerAuto/slice"
import listMovieReducer from "../pages/HomeTemplate/ListMovie/slice";
import DetailMovieReducer from "../pages/HomeTemplate/DetailMovie/slice"
import listTheaterReducer from "../pages/HomeTemplate/ListTheater/slice"
import loginReducer from "../pages/Auth/Login/slice"
import registerReducer from "../pages/Auth/Register/slice"
const store = configureStore({
    reducer:{
        // your reducers here
        listBannerReducer,
        listMovieReducer,
        DetailMovieReducer,
        listTheaterReducer,
        loginReducer,
        registerReducer,
    }
})
export default store;