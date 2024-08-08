import { configureStore } from '@reduxjs/toolkit';
import { PopularItems } from '../api/apipopularitems';
import { NewArrivals } from '../api/apinewarrivals';


const store = configureStore({
  reducer: {
    [PopularItems.reducerPath]: PopularItems.reducer,
    [NewArrivals.reducerPath] : NewArrivals.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PopularItems.middleware, NewArrivals.middleware),
});

export default store;
