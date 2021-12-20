import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../features/Products/ProductsSlice';

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});
