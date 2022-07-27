import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        products: [...state.products, { ...action.payload, amount: 1 }],
      };
    },
    clearCart: (state) => {
      return { products: [] };
    },
    incrementProductAmount: (state, action) => {
      return {
        products: state.products.map((item) =>
          item === action.payload.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    },

    decrementProductAmount: (state, action) => {
      return {
        products: state.products.map((item) =>
          item === action.payload.id
            ? { ...item, amount: item.amount - 1 }
            : item
        ),
      };
    },
  },
});

export const cartProducts = (state) => state.cart.products;

export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
