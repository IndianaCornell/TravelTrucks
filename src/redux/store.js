import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./catalogSlice";
import { favoritesReducer } from "./favoritesSlice";

export const store = configureStore({
  reducer: { catalog: catalogReducer, favorites: favoritesReducer },
});
