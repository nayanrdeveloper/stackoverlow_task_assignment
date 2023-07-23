import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionsApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.stackexchange.com/" }),
  endpoints: (builder) => ({
    getQuestionsByTag: builder.query({
      query: () =>
        "2.3/questions?order=desc&sort=activity&tagged=react&site=stackoverflow",
    }),
    // Define more endpoints here if needed
  }),
});

export const { useGetQuestionsByTagQuery } = questionsApi;
