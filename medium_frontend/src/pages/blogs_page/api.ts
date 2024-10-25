import { baseUrl } from "../../env";
import { get } from "../../lib/network";
import { Post } from "../../types";

export const fetchBlogs = async () => {
    try {
        const token = localStorage.getItem("token");
        const data = await get(`${baseUrl}/blogs/posts`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        
        return [data, null] as [Post[], null]
        

    } catch (err) {
        return [null, err] as [null, Error]
    }

};