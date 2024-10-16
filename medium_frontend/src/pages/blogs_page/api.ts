import { get } from "../../lib/Network";

const baseUrl = "http://127.0.0.1:8787/api/v1";

interface Author {
    id: string,
    name: string
}

interface Post {
    id: string,
    title: string,
    content: string,
    author: Author
}

export interface BlogsType {
    message: string,
    post: Post[]
    status: boolean
}

export const fetchBlogs = async () => {
    try {
        const token = localStorage.getItem("token");
        const data = await get(`${baseUrl}/blogs/posts`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return [data, null] as [BlogsType, null]
    } catch (err) {
        return [null, err] as [null, Error]
    }

};

