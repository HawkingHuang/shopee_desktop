import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  isLogin: boolean;
  username: string;
};

const initialState: AuthState = {
  isLogin: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
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
