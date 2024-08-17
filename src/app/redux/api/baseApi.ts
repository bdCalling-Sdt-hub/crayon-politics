import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://64.227.170.194:5000/api/v1"
    }),
    endpoints: () => ({})
});

export const imageUrl = "http://64.227.170.194:5000";
// export const imageUrl = "http://192.168.10.185:5000";