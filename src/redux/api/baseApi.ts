import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://143.244.131.216:5000/api/v1"
    }),
    endpoints: () => ({})
});

export const imageUrl = "http://143.244.131.216:5000";