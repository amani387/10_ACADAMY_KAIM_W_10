import axios from 'axios';

const API_URL = "http://localhost:5000/api/prices"; // Flask API

export const getOilPrices = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching oil prices:", error);
    return [];
  }
};
