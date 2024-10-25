import { baseUrl } from "../../env";
import { post } from "../../lib/network";
import { Post as PostType } from "../../types";

interface Post {
    title: string,
    content: string,
}



export const postBlog = async (postData: Post) => {
    try {

        const token = localStorage.getItem("token");
        const data = await post(`${baseUrl}/blogs`, postData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        
        return [data, null] as [PostType, null]
        
    } catch (err) {
        return [null, err] as [null, Error]
    }

};