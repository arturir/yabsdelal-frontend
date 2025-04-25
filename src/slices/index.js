import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./priceSlice";
import orderFormReducer from  "./orderFormSlice";
import { priceApi } from "./priceApi";
import { orderApi } from "./orderApi";

export default configureStore({
    reducer: {
        [priceApi.reducerPath]: priceApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        orderForm: orderFormReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(priceApi.middleware, orderApi.middleware),
})