import { configureStore  } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import courseSlice from "../slices/courseSlice";
import lessoneSlice from "../slices/lessoneSlice";


const store = configureStore({
    reducer:{
        user : userSlice,
        course:courseSlice,
        lessone:lessoneSlice
    }
});

export default store