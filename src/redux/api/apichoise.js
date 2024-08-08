import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Choises = createApi({
  reducerPath: 'choices',
  tagTypes: ['Choises'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  endpoints: (builder) => ({
    getChoise: builder.query({
      query: () => 'choices',
      tagTypes: ['Choises']
    }),
    getChoiseById: builder.query({
      query: (id) => `choices/${id}`
    }),
    changeChoise: builder.mutation({
      query: (body) => ({
        url: `choices/${body.id}`,
        method: 'PUT',
        body,
        invalidatesTags: ['Choises']
      }),
    }),
  }),
})


export const { useGetChoiseByIdQuery, useGetChoiseQuery, useChangeChoiseMutation } = Choises;