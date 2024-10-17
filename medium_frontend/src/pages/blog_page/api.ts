import { get } from "../../lib/Network";

const baseUrl = "http://127.0.0.1:8787/api/v1";

export interface Author {
    name: string
}

interface Post {
    id: string,
    title: string,
    content: string,
    author: Author
}

export interface BlogType {
    message: string,
    post: Post
    status: boolean
}

export const fetchBlog = async (id:string) => {
    try {
        const token = localStorage.getItem("token");
        const data = await get(`${baseUrl}/blogs/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return [data, null] as [BlogType, null]
    } catch (err) {
        return [null, err] as [null, Error]
    }

};

