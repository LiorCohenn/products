import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {createProduct,getAllProducts} from "../../API"

const initialState = {
  movies: [],
search: "",
loading: false,
error: null,
};

export const getProducts = createAsyncThunk("products/getAllProducts", async (_,thunkAPI) => {
  try {
  const res = await getAllProducts().then((data) => data.data);

  return res;
  } catch (e) {
      console.log('ERROR:', e)
  }
});
export const newProduct = createAsyncThunk("products/createProduct",async (product,thunkAPI) => {
    const state = thunkAPI.getState().products;
    try {
      const res = await movieByID(product).then((data) => data.data);
      return res;
    } catch (e) {
      console.log("ERROR:", e);
    }
  }
);

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      console.log(payload);
      state.search = payload;
    },
    Reset: (state) =>{
      state.search = ""
      state.movies = []
    }
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      console.log("pending");
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log(action);
      state.movies = action.payload;
      state.search = "";
      state.loading = false;
    },
    [getProducts.rejected]: (state) => {
      console.log("reject");
      state.loading = false;
      state.error = true;
    },

    [newProduct.pending]: (state) => {
      console.log("pending");
      state.loading = true;
    },
    [newProduct.fulfilled]: (state, action) => {
      console.log(action);
      state.movies = action.payload;
      state.search = "";
      state.loading = false;
    },
    [newProduct.rejected]: (state) => {
      console.log("reject");
      state.loading = false;
      state.error = true;
    },
  },
});

export const { setSearch, Reset } = ProductsSlice.actions;



export default ProductsSlice.reducer;
