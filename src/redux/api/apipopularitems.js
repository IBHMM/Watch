import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const PopularItems = createApi({
  reducerPath: 'popular',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  endpoints: (builder) => ({
    getPopularitems: builder.query({
      query: () => 'popularItems'
    }),
    getPopularById: builder.query({
      query: (id) => `popularItems/${id}`
    }),
  }),
})


export const { useGetPopularitemsQuery , useGetPopularByIdQuery  } = PopularItems