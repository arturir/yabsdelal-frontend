import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = process.env.REACT_APP_API_URL;

export const priceApi = createApi({
    reducerPath: 'price',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/` }),
    endpoints: (builder) => ({
        getBrands: builder.query({
            query: () => "brands",
        }),
        getModelsByBrand: builder.query({
            query: (id) => `models/brand/${id}`,
        }),
    }),
});

export const { useGetBrandsQuery, useLazyGetModelsByBrandQuery } = priceApi;
