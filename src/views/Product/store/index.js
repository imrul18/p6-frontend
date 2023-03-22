// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk("Product/getAllData", async () => {
  const response = await Api.get("products");
  return response.data;
});

export const AddProduct = createAsyncThunk("Product/AddProduct", async (data, {dispatch}) => {
  const response = await Api.post("products", data);
  dispatch(getAllData())
  return response.data;
});

export const getAllRoles = createAsyncThunk("Product/getAllRoles", async (data) => {
  const response = await Api.get("role-options", data);
  return response.data;
});

export const UserSlice = createSlice({
  name: "Product",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    roleOptions: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(getAllRoles.fulfilled, (state, action) => {
      state.roleOptions = action.payload;
    });
  },
});

export default UserSlice.reducer;
