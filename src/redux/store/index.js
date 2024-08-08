import { configureStore } from '@reduxjs/toolkit';
import { PopularItems } from '../api/apipopularitems';
import { NewArrivals } from '../api/apinewarrivals';
import { Choises } from '../api/apichoise';
import { photosApi } from '../api/apiphotos';

const store = configureStore({
  reducer: {
    [PopularItems.reducerPath]: PopularItems.reducer,
    [NewArrivals.reducerPath] : NewArrivals.reducer,
    [Choises.reducerPath] : Choises.reducer,
    [photosApi.reducerPath] : photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PopularItems.middleware, NewArrivals.middleware, Choises.middleware, photosApi.middleware),
});

export default store;
