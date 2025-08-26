import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  //slice has name, initialState and reducers
  name: "recipes",
  initialState: {
    categories: [],
    recipes: [],
    randomRecipe: null,
    loading: false,
    error: null,
  },
  //reducers=functions
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess(state, action) {
      state.loading = false;
      state.categories = action.payload; //data from API
    },
    fetchRecipesSuccess(state, action) {
      state.loading = false;
      state.recipes = action.payload;
    },
    fetchRandomSuccess(state, action) {
      state.loading = false;
      state.randomRecipe = action.payload;
    },
    fetchFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStart,
  fetchCategoriesSuccess,
  fetchRecipesSuccess,
  fetchRandomSuccess,
  fetchFailure,
} = recipeSlice.actions;
export default recipeSlice.reducer;
