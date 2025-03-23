import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCatalog, fetchTruckById } from "./catalogAPI";

axios.defaults.baseURL = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/`;

export const getCatalog = createAsyncThunk(
  "catalog/fetchCatalog",
  async (_, thunkAPI) => {
    try {
      const response = await fetchCatalog();

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getTruck = createAsyncThunk(
  "contacts/fetchTruckById",
  async (id, thunkAPI) => {
    try {
      const response = await fetchTruckById(id);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
