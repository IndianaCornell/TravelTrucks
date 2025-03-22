import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getCatalog, getTruck } from "./catalogOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCatalog.pending, handlePending)
      .addCase(getCatalog.fulfilled, handleFulfilled)
      .addCase(getCatalog.rejected, handleRejected)
      .addCase(getTruck.pending, handlePending)
      .addCase(getTruck.fulfilled, handleFulfilled)
      .addCase(getTruck.rejected, handleRejected);
  },
});

export const catalogReducer = slice.reducer;
