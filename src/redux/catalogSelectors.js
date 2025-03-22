import { createSelector } from "@reduxjs/toolkit";

export const selectCatalog = (state) => state.catalog;

export const selectTrucks = createSelector(
  [selectCatalog],
  (catalog) => catalog.items
);

export const selectLoading = createSelector(
  [selectCatalog],
  (catalog) => catalog.isLoading
);

export const selectError = createSelector(
  [selectCatalog],
  (catalog) => catalog.error
);
