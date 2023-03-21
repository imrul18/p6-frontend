// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../http";

export const getAllData = createAsyncThunk("Roles/getAllData", async () => {
  const response = await Api.get("roles");
  return response.data;
});

export const AddRole = createAsyncThunk("Roles/AddRole", async (data, {dispatch}) => {
  const response = await Api.post("roles", data);
  dispatch(getAllData())
  return response.data;
});

export const getRolePermission = createAsyncThunk("Roles/getRolePermission", async (id) => {
  const response = await Api.get(`roles/${id}`);
  return response.data;
});
export const getAllPermission = createAsyncThunk("Roles/getAllPermission", async () => {
  const response = await Api.get(`permissions`);
  return response.data;
});

export const UpdateRolePermission = createAsyncThunk("Roles/UpdateRolePermission", async (data) => {
  const response = await Api.post(`role-permission`, data);
  return response.data;
});

export const UserSlice = createSlice({
  name: "Role",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    role: [],
    allPermission: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    .addCase(getRolePermission.fulfilled, (state, action) => {
      state.role = action.payload;
    })
    .addCase(getAllPermission.fulfilled, (state, action) => {
      state.allPermission = action.payload;
    })
  },
});

export default UserSlice.reducer;
