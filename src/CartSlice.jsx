import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((cartItem) => cartItem.id === id);

      if (!item) return;

      if (quantity <= 0) {
        state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
      } else {
        item.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((cartItem) => cartItem.id !== itemId);
    }
  }
});

export const {
  addItem,
  updateQuantity,
  removeItem
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cart;

export const selectCartCount = (state) =>
  selectCartItems(state).reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  selectCartItems(state).reduce((total, item) => total + item.price * item.quantity, 0);

export const cartReducer = cartSlice.reducer;
export const cartSliceInstance = cartSlice;
export default cartSlice.reducer;
