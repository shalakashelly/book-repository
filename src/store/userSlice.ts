import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
}

export interface UserState {
  user: User | null;
}

export const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    authUser(state: UserState, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});

export const { authUser } = userSlice.actions;

export default userSlice.reducer;
