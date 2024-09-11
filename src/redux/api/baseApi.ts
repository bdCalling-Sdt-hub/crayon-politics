import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://142.93.201.200:5000/api/v1"
    }),
    endpoints: () => ({})
});

export const imageUrl = "http://142.93.201.200:5000";