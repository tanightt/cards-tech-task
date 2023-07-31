import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations.js";
import { editUser } from "./operations.js";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((user) => user.id !== payload);
        state.loading = false;
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const userReducer = slice.reducer;
