import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  seller: string;
  image: string;
  productName: string;
  price: number;
  quantity: number;
  remaining: number;
};

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: {
      prepare(payload: CartItem) {
        return { payload };
      },
      reducer(state, action: PayloadAction<CartItem>) {
        state.push(action.payload);
      },
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index === -1) return;
      state[index].quantity += 1;
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index === -1) return;
      state[index].quantity -= 1;
    },
    setQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index === -1) return;
      state[index].quantity = action.payload.quantity;
    },
    deleteFromCart(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity, setQuantity, deleteFromCart } = cartSlice.actions;
