import { api } from "../api/baseApi";

const webSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        state: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/state",
                }
            }
        }),
        election: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/election",
                }
            }
        }),
        faq: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/faq",
                }
            }
        }),
        about: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/rule/about",
                }
            }
        }),
        terms: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/rule/terms-and-conditions",
                }
            }
        }),
        privacy: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/rule/privacy-policy",
                }
            }
        }),
        candidate: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/candidate",
                }
            }
        }),
        learn: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/learn",
                }
            }
        }),
        news: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/news",
                }
            }
        }),
        topNews: builder.query({
            query: () => {
                return{
                    method: "GET",
                    url: "/news/top-news",
                }
            }
        }),
        newsDetails: builder.query({
            query: (id) => {
                return{
                    method: "GET",
                    url: `/news/${id}`,
                }
            }
        }),
        subscribe: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/subscribe",
                    body: data
                }
            }
        }),
        feedback: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/feedback",
                    body: data
                }
            }
        }),
        intent: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/donate/create-payment-intent",
                    body: data
                }
            }
        }),
        donate: builder.mutation({
            query: (data) => {
                return{
                    method: "POST",
                    url: "/donate",
                    body: data
                }
            }
        }),
    })
});

export const {
    useElectionQuery,
    useStateQuery,
    useFaqQuery,
    useAboutQuery,
    useTermsQuery,
    usePrivacyQuery,
    useCandidateQuery,
    useLearnQuery,
    useNewsQuery,
    useTopNewsQuery,
    useNewsDetailsQuery,
    useSubscribeMutation,
    useFeedbackMutation,
    useIntentMutation,
    useDonateMutation
} = webSlice;