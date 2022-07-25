import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      }
    },
    incrementQuantity: () => {},
    decrementQuantity: () => {},
    removeFromBasket: () => {},
  },
});

export const { addToBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
