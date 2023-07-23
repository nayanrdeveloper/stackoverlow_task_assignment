import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const questionsApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.stackexchange.com/" }),
  endpoints: (builder) => ({
    getQuestionsByTag: builder.query({
      query: ({tag, currentPage}) =>
        `2.3/questions?page=${currentPage}&order=desc&pagesize=6&sort=activity&tagged=${tag}&site=stackoverflow`,
    }),
  }),
});

export const { useGetQuestionsByTagQuery } = questionsApi;
