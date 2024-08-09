import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      // const quantity = 1;
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);

    },
  }
});

export const { addToCart, incrementQuantity,decrementQuantity,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;