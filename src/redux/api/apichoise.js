import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Choises = createApi({
  reducerPath: 'choices',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  endpoints: (builder) => ({
    getChoise: builder.query({
      query: () => 'choices'
    }),
    getChoiseById: builder.query({
      query: (id) => `choices/${id}`
    }),
  }),
})


export const { useGetChoiseByIdQuery, useGetChoiseQuery } = Choises;