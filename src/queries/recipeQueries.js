import { useQuery } from "@tanstack/react-query";
import {
  fetchByName,
  fetchRandom,
  fetchCategories,
  fetchCountry,
  fetchByID,
} from "../services/api";

export const useCategories = () => {
  return useQuery(["categories"], fetchCategories);
};

export const useRecipesByName = (foodName) => {
  return useQuery(["recipes", foodName], () => fetchByName(foodName), {
    enabled: !!foodName, // Only fetch if foodName is provided
  });
};

export const useRandomRecipe = () => {
  return useQuery(["randomRecipe"], fetchRandom);
};

export const useRecipesByCountry = (countryName) => {
  return useQuery(
    ["recipesByCountry", countryName],
    () => fetchCountry(countryName),
    {
      enabled: !!countryName, // Only fetch if countryName is provided
    }
  );
};

export const useRecipeByID = (id) => {
  return useQuery(["recipeByID", id], () => fetchByID(id), {
    enabled: !!id, // Only fetch if id is provided
  });
};
