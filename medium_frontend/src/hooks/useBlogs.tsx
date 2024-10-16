import { useEffect, useState } from "react";
import { get } from "../lib/Network";

const baseUrl = "http://127.0.0.1:8787/api/v1";

interface author {
    id: string,
    name: string
}

interface post {
    id: string,
    title: string,
    content: string,
    author: author
}

interface blogs {
    message: string,
    post: post[]
    status: boolean
}


export const useBlogs = () => {
    const [isLoading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<blogs>({
        message: "",
        post: [],
        status: false
    });
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem("token");
                const response: blogs = await get(`${baseUrl}/blogs/posts`, {
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
