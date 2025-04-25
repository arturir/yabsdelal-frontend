import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Используем только baseUrl, так как порт и URL уже указаны в baseQuery
const URL = process.env.REACT_APP_API_URL;
const PORT = process.env.REACT_APP_API_PORT;

export const priceApi = createApi({
    reducerPath: 'price',
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}:${PORT}/` }), // Это устанавливает общий baseUrl для всех запросов
    endpoints: (builder) => ({
        getBrands: builder.query({
            query: () => "brands",  // Только относительный путь
        }),
        getModelsByBrand: builder.query({
            query: (id) => `models/brand/${id}`, // Только относительный путь
        }),
    }),
});

export const { useGetBrandsQuery, useLazyGetModelsByBrandQuery } = priceApi;
