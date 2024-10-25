import { baseUrl } from "../../env";
import { get } from "../../lib/network";
import { Post } from "../../types";

export const fetchBlog = async (id:string) => {
    try {
        const token = localStorage.getItem("token");
        const data = await get(`${baseUrl}/blogs/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });       
        return [data, null] as [Post, null]
        
    } catch (err) {
        return [null, err] as [null, Error]
    }

};

