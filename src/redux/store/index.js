import { configureStore } from '@reduxjs/toolkit';
import { popularItemsApi } from '../api/apipopularitems';
import { NewArrivalsApi } from '../api/apinewarrivals';
import { Choises } from '../api/apichoise';
import { photosApi } from '../api/apiphotos';
import cartReducer from '../features/cartSlice';

const store = configureStore({
  reducer: {
    [popularItemsApi.reducerPath]: popularItemsApi.reducer,
    [NewArrivalsApi.reducerPath] : NewArrivalsApi.reducer,
    [Choises.reducerPath] : Choises.reducer,
    [photosApi.reducerPath] : photosApi.reducer,
    cart: cartReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(popularItemsApi.middleware, NewArrivalsApi.middleware, Choises.middleware, photosApi.middleware),
});

export default store;
