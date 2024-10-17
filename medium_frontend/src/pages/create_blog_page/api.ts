import { post } from "../../lib/Network";

const baseUrl = "http://127.0.0.1:8787/api/v1";

export interface Author {
    name: string
}

interface Post {
    title: string,
    content: string,
}

export interface BlogType {
    message: string,
    status: boolean
}

export const postBlog = async (postData: Post) => {
    try {

        const token = localStorage.getItem("token");
        const data = await post(`${baseUrl}/blogs`, postData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return [data, null] as [BlogType, null]
    } catch (err) {
        return [null, err] as [null, Error]
    }

};

