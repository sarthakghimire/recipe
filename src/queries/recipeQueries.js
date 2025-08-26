import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchByName = async (foodName) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${foodName}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch recipe");
  }
};
export const fetchRandom = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/random.php`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch recipe");
  }
};
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories.php`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch recipe");
  }
};
export const fetchCountry = async (countryName) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?a=${countryName}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch recipe");
  }
};
export const fetchByID = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch recipe");
  }
};
