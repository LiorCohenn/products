import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {createProduct,getAllProducts} from "../../API"

const initialState = {
  products: [],
  suppliers: [],
loading: false,
error: false,
};
// get products function
export const getProducts = createAsyncThunk("products/getAllProducts", async (_,thunkAPI) => {
  try {
  const res = await getAllProducts().then((products) => products.data);
    
  return res;
  } catch (e) {
      return thunkAPI.rejectWithValue(e.response)
  }
});
// create product function
export const newProduct = createAsyncThunk("products/createProduct",async (product,thunkAPI) => {

    try {
      const res = await createProduct(product).then((products) => products.data);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response)
    }
  }
);

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  Error: (state) =>{
    state.error = false
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.suppliers = action.payload.suppliers;
      state.loading = false;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    [newProduct.pending]: (state) => {
      state.loading = true;
    },
    [newProduct.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.suppliers = action.payload.suppliers;
      state.loading = false;
    },
    [newProduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { Error } = ProductsSlice.actions;

export default ProductsSlice.reducer;
