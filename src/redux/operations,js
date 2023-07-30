import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64ac593a9edb4181202f765e.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "user/fetch",
  async ({ limit }, thunkAPI) => {
    try {
      const { data } = await axios.get("/users", {
        params: {
          page: 1,
          limit: limit,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  "user/patch",
  async ({ avatar, followers, tweets, id }, thunkAPI) => {
    try {
      const user = { avatar, followers, tweets, id };
      const { data } = await axios.put(`/users/${id}`, user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
