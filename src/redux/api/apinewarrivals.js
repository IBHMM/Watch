import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const NewArrivals = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  endpoints: (builder) => ({
    getnewArrivals: builder.query({
      query: () => 'newArrivals'
    }),
    getnewArrivalsById: builder.query({
      query: (id) => `newArrivals/${id}`
    }),
  }),
})


export const { useGetnewArrivalsByIdQuery, useGetnewArrivalsQuery } = NewArrivals