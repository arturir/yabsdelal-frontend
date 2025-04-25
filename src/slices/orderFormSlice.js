import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brand: "", model: "", service: "", hasMovedForward: false
};

const orderFormSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addFormOrder: (state, { payload }) => {
            console.log("model", payload.model, "service" ,payload.service);
            state.brand = payload.brand;
            state.model = payload.model;
            state.service = payload.service;
        },
        goToNextPage: (state) => {
            state.hasMovedForward = true;
          },
        resetNavigation: (state) => {
            state.hasMovedForward = false;
        },
        
    }
});


export const { addFormOrder, goToNextPage, resetNavigation } =orderFormSlice.actions;
export default orderFormSlice.reducer;