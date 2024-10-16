
import { useState, useEffect } from "react";
import { AppBar } from "../../components/AppBar"
import { fetchBlogs } from "./api";
import { BlogCard } from "./components/BlogCard"
import { BlogsType } from "./api";

export const Blogs = () => {
    const [isLoading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<BlogsType>({
        message: "",
        post: [],
        status: false
    });
    const [error, setError] = useState("");

    useEffect(() => {
        fetchBlogs()
            .then(response => {
                const [data, err] = response
                if (err) {
                    setError(err?.message as any)
                }
                setBlogs(data!)
                setLoading(false)
            })
    }, [])


    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

    return <div>
        <div>
            <AppBar authorName={"authorName"} />
        </div>
        <div className="flex justify-center flex-col items-center">
            {blogs.post.map((blog, idx) => {
                return <div className="items-center" key={idx}>
                    <BlogCard authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={"3 dec, 2023"} key={idx} />
                </div>
            })}
        </div>
    </div>
}