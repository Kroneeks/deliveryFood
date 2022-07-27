import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  statue: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "products/fetchPosts",
  async () => {
    const response = await fetch(
      "http://localhost:8080/api/products-by-categories"
    );
    const data = await response.json();
    return data;
  }
);

export const selectAllProducts = (state) => {
  return state.products.products;
};
