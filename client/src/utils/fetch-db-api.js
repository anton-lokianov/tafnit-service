import axios from "axios";

export const fetchLogin = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:4000/auth/login", {
      username,
      password,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("An error occurred during the login request:", error);
    throw new Error(error);
  }
};
