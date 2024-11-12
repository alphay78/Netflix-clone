import instance from "./axiosInstance";
import requests from "./requests";

const fetchTrending = async () => {
  try {
    const response = await instance.get(requests.fetchTrending);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending data:", error);
  }
};

export { fetchTrending };
