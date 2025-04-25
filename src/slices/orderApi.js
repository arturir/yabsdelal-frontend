import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Используем только baseUrl, так как порт и URL уже указаны в baseQuery
const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

export const orderApi = createApi({
    reducerPath: 'order',
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}:${PORT}/` }),
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
