import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const popularItemsApi = createApi({
  reducerPath: 'popularItems',
  tagTypes: ['PopularItems'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  endpoints: (builder) => ({
    getPopularItems: builder.query({
      query: () => 'popularItems',
      providesTags: ['PopularItems'],
    }),
    getPopularItemById: builder.query({
      query: (id) => `popularItems/${id}`,
      providesTags: (result, error, id) => [{ type: 'PopularItems', id }],
    }),
    changePopularItem: builder.mutation({
      query: (body) => ({
        url: `popularItems/${body.id}`,
        method: 'PUT',
        body,
        invalidatesTags: ["PopularItems"],
      }),
    }),
    deletePopularItem: builder.mutation({
      query: (id) => ({
        url: `popularItems/${id}`,
        method: 'DELETE',
        invalidatesTags: ["PopularItems"],
      }),
    }),
    addPopularItem: builder.mutation({
      query: (body) => ({
        url: 'popularItems',
        method: 'POST',
        body,
        invalidatesTags: ['PopularItems'],
      }),
    }),
  }),
});

export const { 
  useGetPopularItemsQuery, 
  useGetPopularItemByIdQuery, 
  useChangePopularItemMutation, 
  useDeletePopularItemMutation, 
  useAddPopularItemMutation 
} = popularItemsApi;
