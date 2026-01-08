import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.username = action.payload;
    },
    logout(state) {
      state.isLogin = false;
      state.username = "";
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
