import axios from "axios";

const API_BASE_URL = "http://localhost:8080/books"; // Adjust if deployed

export const fetchBooks = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const fetchBookById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const fetchAIInsights = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}/ai-insights`);
  return response.data;
};

export const searchBooks = async (title = "", author = "") => {
    const response = await axios.get(`http://localhost:8080/books/search`, {
      params: { title, author },
    });
    return response.data;
  };
  
