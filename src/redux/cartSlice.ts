import { createSlice } from "@reduxjs/toolkit";
import chartData, { TchartData } from "../data/cartData";

interface ICart {
  cartItems: TchartData[];
  quantity: number;
  total: number;
}

export interface IRootState {
  cart: ICart;
}

const initialState: ICart = {
  cartItems: chartData,
  quantity: 5,
  total: 0,
};

const getTotalQuantity = (state: ICart) =>
  (state.quantity = state.cartItems.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  ));

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    deleteCartItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      getTotalQuantity(state);
    },
    increaseDecreaseQuantity: (state, action) => {
      const { itemId, type } = action.payload;

      const { cartItems } = state;
      const effectedCartItem = cartItems.find(({ id }) => id === itemId);

      if (effectedCartItem?.quantity) {
        switch (type) {
          case "increase":
            effectedCartItem.quantity += 1;
            break;
          case "decrease":
            if (effectedCartItem.quantity === 1) {
              state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
              );
            } else {
              effectedCartItem.quantity -= 1;
            }
        }
      }
      getTotalQuantity(state);
    },
    getTotalPrice: (state) => {
      state.total = state.cartItems.reduce(
        (totalPrice, item) => totalPrice + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  clearCart,
  deleteCartItem,
  increaseDecreaseQuantity,
  getTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
