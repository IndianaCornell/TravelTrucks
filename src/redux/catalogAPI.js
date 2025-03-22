import axios from "axios";

axios.defaults.baseURL = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/`;

export const fetchCatalog = async () => {
  const response = await axios.get("/campers");
  return response.data;
};

export const fetchTruckById = async (id) => {
  const response = await axios.get(`/campers/${id}`);
  return response.data;
};
