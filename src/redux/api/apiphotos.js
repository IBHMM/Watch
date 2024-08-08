import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Photos = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  endpoints: (builder) => ({
    getChoise: builder.query({
      query: () => 'photos'
    }),
    getChoiseById: builder.query({
      query: (id) => `photos/${id}`
    }),
  }),
})


export const { useGetChoiseByIdQuery, useGetChoiseQuery } = Photos