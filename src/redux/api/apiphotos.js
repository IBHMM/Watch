import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonwatchdb-iejj.vercel.app/' }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => 'photos',
    }),
    getPhotoById: builder.query({
      query: (id) => `photos/${id}`,
    }),
  }),
});

export const { useGetPhotosQuery, useGetPhotoByIdQuery } = photosApi;
