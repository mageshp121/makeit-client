import { configureStore  } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import courseSlice from "../slices/courseSlice";
import lessoneSlice from "../slices/lessoneSlice";
import tokenSlice from "../slices/tokenSlice"


const store = configureStore({
    reducer:{
        user : userSlice,
        course:courseSlice,
        lessone:lessoneSlice,
        token : tokenSlice
    }
});

export default store