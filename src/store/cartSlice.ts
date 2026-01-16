import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: {
      prepare(id, seller, image, productName, price, quantity, remaining) {
        return {
          payload: {
            id,
            seller,
            image,
            productName,
            price,
            quantity,
            remaining,
          },
        };
      },
      reducer(state, action) {
        const currentProduct = {
          id: action.payload.id,
          image: action.payload.image,
          productName: action.payload.productName,
          price: action.payload.price,
          quantity: action.payload.quantity,
          remaining: action.payload.remaining,
          seller: action.payload.seller,
        };
        state.push(currentProduct);
      },
    },
    increaseQuantity(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].quantity -= 1;
    },
    setQuantity(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index === -1) return;
      state[index].quantity = action.payload.quantity;
    },
    deleteFromCart(state, action) {
      const newState = state.filter((item) => item.id !== action.payload);
      return newState;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity, setQuantity, deleteFromCart } = cartSlice.actions;
