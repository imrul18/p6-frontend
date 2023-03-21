// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../http";

export const getAllData = createAsyncThunk("permission/getAllData", async () => {
  const response = await Api.get("user-permission");
  return response.data;
});

export const permissionSlice = createSlice({
  name: "permission",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload;
    })
  },
});

export default permissionSlice.reducer;
