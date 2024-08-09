import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  tagTypes: ['Photos'], 
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => 'photos',
      providesTags: ['Photos'],
    }),
    getPhotoById: builder.query({
      query: (id) => `photos/${id}`,
      providesTags: ['Photos'],
    }),
    addPhoto: builder.mutation({
      query: (newPhoto) => ({
        url: 'photos',
        method: 'POST',
        body: newPhoto,
      }),
      invalidatesTags: ['Photos'],
    }),
    updatePhoto: builder.mutation({
      query: ({ id, ...updatedPhoto }) => ({
        url: `photos/${id}`,
        method: 'PUT',
        body: updatedPhoto,
      }),
      invalidatesTags: ['Photos'],
    }),
    deletePhoto: builder.mutation({
      query: (id) => ({
        url: `photos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Photos'],
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useGetPhotoByIdQuery,
  useAddPhotoMutation,
  useUpdatePhotoMutation,
  useDeletePhotoMutation,
} = photosApi;
