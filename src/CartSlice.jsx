import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((cartItem) => cartItem.id === itemId);

      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((cartItem) => cartItem.id === itemId);

      if (!item) {
        return;
      }

      if (item.quantity <= 1) {
        state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
      } else {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
    }
  }
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cart;

export const selectCartCount = (state) =>
  selectCartItems(state).reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  selectCartItems(state).reduce((total, item) => total + item.price * item.quantity, 0);

export const cartReducer = cartSlice.reducer;
export const cartSliceInstance = cartSlice;
export default cartSlice.reducer;
