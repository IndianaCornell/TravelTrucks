import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: loadFavorites(),
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const truckId = action.payload;
      const exists = state.items.includes(truckId);

      if (exists) {
        state.items = state.items.filter((id) => id !== truckId);
      } else {
        state.items.push(truckId);
      }

      saveFavorites(state.items);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const selectFavorites = (state) => state.favorites.items;
