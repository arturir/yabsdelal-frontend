import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brands: [],
    models: []
}

const priceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        brands: (state) => {
            return state.brands
        },
    }
})

export const {brands} = priceSlice.actions;
export default priceSlice.reducer