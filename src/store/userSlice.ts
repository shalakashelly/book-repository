import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
}

export interface UserState {
  userInfo: User | null;
}

export const initialState: UserState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authUser(state: UserState, action: PayloadAction<User>) {
      return {...state, userInfo: action.payload};
    },
  },
});

export const { authUser } = userSlice.actions;

export default userSlice.reducer;
