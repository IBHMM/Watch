import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Choises = createApi({
  reducerPath: 'choices',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  endpoints: (builder) => ({
    getChoise: builder.query({
      query: () => 'choices',
      providesTags: ['Choises']
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
    deleteChoise: builder.mutation({
      query: (id) => ({
        url: `choices/${id}`,
        method: 'DELETE',
        invalidatesTags: ['Choises']
      }),
    }),
    addChoise: builder.mutation({
      query: (body) => ({
        url: `choices`,
        method: 'POST',
        body,
        invalidatesTags: ['Choises']
      }),
    }),
  }),
})


export const { useGetChoiseByIdQuery, useGetChoiseQuery, useChangeChoiseMutation, useDeleteChoiseMutation, useAddChoiseMutation } = Choises;