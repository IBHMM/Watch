import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const NewArrivalsApi = createApi({
  reducerPath: 'newArrival',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  tagTypes: ['NewArrivals'], 
  endpoints: (builder) => ({
    getNewArrivals: builder.query({
      query: () => 'newArrivals',
      providesTags: ['NewArrivals'],
    }),
    getNewArrivalById: builder.query({
      query: (id) => `newArrivals/${id}`,
      providesTags: ['NewArrivals'],
    }),
    addNewArrival: builder.mutation({
      query: (newArrival) => ({
        url: 'newArrivals',
        method: 'POST',
        body: newArrival,
      }),
      invalidatesTags: ['NewArrivals'],
    }),
    updateNewArrival: builder.mutation({
      query: ({ id, ...updatedArrival }) => ({
        url: `newArrivals/${id}`,
        method: 'PUT',
        body: updatedArrival,
      }),
      invalidatesTags: ['NewArrivals'],
    }),
    deleteNewArrival: builder.mutation({
      query: (id) => ({
        url: `newArrivals/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['NewArrivals'],
    }),
  }),
});

export const {
  useGetNewArrivalsQuery,
  useGetNewArrivalByIdQuery,
  useAddNewArrivalMutation,
  useUpdateNewArrivalMutation,
  useDeleteNewArrivalMutation,
} = NewArrivalsApi;
