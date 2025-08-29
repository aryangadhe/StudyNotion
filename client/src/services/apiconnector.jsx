import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1", // set your backend base URL
});

// method = "PUT" | "POST" | "GET"
// url = "/profile/updateProfile" etc.
export const apiConnector = (method, url, bodyData = null, headers = {}, params = {}) => {
  const token = localStorage.getItem("token"); // auto fetch

  return axiosInstance({
    method,
    url,
    data: bodyData,
    params,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
  });
};