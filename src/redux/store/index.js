import { configureStore } from '@reduxjs/toolkit';
import { popularItemsApi } from '../api/apipopularitems';
import { NewArrivals } from '../api/apinewarrivals';
import { Choises } from '../api/apichoise';
import { photosApi } from '../api/apiphotos';

const store = configureStore({
  reducer: {
    [popularItemsApi.reducerPath]: popularItemsApi.reducer,
    [NewArrivals.reducerPath] : NewArrivals.reducer,
    [Choises.reducerPath] : Choises.reducer,
    [photosApi.reducerPath] : photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(popularItemsApi.middleware, NewArrivals.middleware, Choises.middleware, photosApi.middleware),
});

export default store;
