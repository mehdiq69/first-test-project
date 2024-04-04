import axios from "axios";

const api = axios.create({
  baseURL: "https://660eca10356b87a55c502083.mockapi.io/",
});
api.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
