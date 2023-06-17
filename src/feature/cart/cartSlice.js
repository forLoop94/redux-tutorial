import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    calculateTotal: (state) => {
      // return state.cartItems.reduce((acc, item) => acc + item.price)
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price;
      });
      state.total = total;
      console.log(total);
    }
  }
})

// console.log(initialState);

export const { calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;