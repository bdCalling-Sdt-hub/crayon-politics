import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.crayonpolitics.org/api/v1"
    }),
    endpoints: () => ({})
});

export const imageUrl = "http://api.crayonpolitics.org";