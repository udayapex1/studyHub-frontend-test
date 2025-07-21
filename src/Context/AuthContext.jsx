import { createContext, useContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../lib/utils.js";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuntheticated, setisAuntheticated] = useState(false); // use for checking the status of user thta has login or not

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) return;
        const { data } = await axios.get(`${BACKEND_URL}/api/Auth/myProfile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data.user);
        console.log(data);
        setisAuntheticated(true);
      } catch (error) {
        console.log("Authentication Check Failed ", error);
        setisAuntheticated(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (password, email) => {
    try {
      const { data } = await axios.post(
        `${BACKEND_URL}/api/auth/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", data.token);
      console.log(data);
      setUser(data.user); // assuming backend sends user in response
      setisAuntheticated(true);
      return data;
    } catch (error) {
      console.log();
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    setisAuntheticated(false);
  };
  const register = async (
    firstName,
    lastName,
    email,
    password,
    profile,
    college,
    branchName,
    year
  ) => {
    try {
      const formData = new FormData();

      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile", profile); // image file
      formData.append("college", college);
      formData.append("branchName", branchName);
      formData.append("year", year);

      const response = await axios.post(
        `${BACKEND_URL}/api/auth/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // if you're setting cookies (like JWT)
        }
      );

      console.log("Register Success:", response.data);
      return response.data;
    } catch (error) {
      console.error("Register Error:", error?.response?.data || error.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, login, register, isAuntheticated, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
