import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = process.env.REACT_APP_API_URL;

export const orderApi = createApi({
    reducerPath: 'order',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/` }),
    endpoints: (builder) => ({
        sendOrder: builder.mutation({
            query: (data) => ({
                url: "request/order",
                method: 'POST',
                body: data,
            })
        }),
        sendCallback: builder.mutation({
            query: (data) => ({
                url: "request/callback",
                method: 'POST',
                body: data,
            })
        }),
    }),
});

export const { useSendOrderMutation, useSendCallbackMutation } = orderApi;
