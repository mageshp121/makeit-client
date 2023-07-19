import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { lessone, lessoneDataOrder } from "../../types/types";





const lessonSlice = createSlice({
    name:'lesson',
    initialState:{
         lessoneDataOrder:1
    } ,
    reducers:{
        addLessone:(state)=>{
            console.log(state.lessoneDataOrder,'payloaddd');
             state.lessoneDataOrder=state.lessoneDataOrder+1
        },
        clearLesson:(state)=>{
            state.lessoneDataOrder = 1
        },
    }

})


export const { addLessone,clearLesson} = lessonSlice.actions
export default lessonSlice.reducer; 