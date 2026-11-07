import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a new plant, or increase the quantity if it is already in the cart.
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.id === plant.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    // Remove a plant completely from the cart.
    removeItem: (state, action) => {
      const plantId = action.payload;
      state.items = state.items.filter((item) => item.id !== plantId);
    },

    // Set the quantity for a cart item. A quantity of zero removes it.
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((plant) => plant.id === id);

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter((plant) => plant.id !== id);
      } else {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
