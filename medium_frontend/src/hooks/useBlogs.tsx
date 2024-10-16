import { useEffect, useState } from "react";
import { get } from "../lib/Network";

const baseUrl = "http://127.0.0.1:8787/api/v1";




export const useBlogs = () => {
  const [isLoading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await get(`${baseUrl}/blog/bulk`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(response);
      } catch (err) {
        setError("error");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty array ensures this effect runs only once when the component mounts.

  return { blogs, isLoading, error };
};
