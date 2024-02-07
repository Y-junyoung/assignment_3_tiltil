import { createSlice } from "@reduxjs/toolkit";

export type initialState = {
  nickname: string;
};

const userSlice = createSlice({
  initialState: { nickname: "udemy" },
  name: "user",
  reducers: {
    changeNickname(state, action) {
      state.nickname = action.payload.nickname;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { changeNickname } = userSlice.actions;
