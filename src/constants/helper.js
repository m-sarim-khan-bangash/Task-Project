import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);
    return response.data;
  } catch (err) {
    toast.error("Error fetching data");
  }
};

export const addUser = async (endpoint, user) => {
  try {
    const res = await axios.post(`${BASE_URL}${endpoint}`, user);
    if (res.status === 201) {
      toast.success("User added successfully");
    }
    return res;
  } catch (err) {
    toast.error("Error adding user");
    console.error("Error adding user:", err);
  }
};
