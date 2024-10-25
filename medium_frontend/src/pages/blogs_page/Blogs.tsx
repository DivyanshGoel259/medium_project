import { useState, useEffect } from "react";
import { AppBar } from "../../components/AppBar"
import { fetchBlogs, Post } from "./api";
import { BlogCard } from "./components/BlogCard"
import { BlogCardLoadingUi } from "./components/BlogCardLoadingUi";

export const Blogs = () => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [blogs, setBlogs] = useState<Array<Post>>([]);
    const [error, setError] = useState<String | null>(null);

    useEffect(() => {
        fetchBlogs()
            .then(response => {
                const [data, err] = response
                if (err) {
                    setError(err.message)
                    setLoading(false)
                    return
                }                
                setBlogs(data)
                setLoading(false)
            })
    }, [])

    if (error) {
        return <div>Error: {error}</div>
    }



    return <div>
        <div>
            <AppBar buttonText="Create Post" authorName={"authorName"} />
        </div>
        <div className="flex justify-center flex-col items-center">
            {isLoading ? <div className="items-center "><BlogCardLoadingUi /></div> : <div></div>}
        </div>
        <div>
            {error ? <div>{error}</div> : <div></div>}
        </div>
        <div className="flex justify-center flex-col items-center">
            {blogs.map((blog, idx) => {
                return <div className="items-center" key={idx}>
                    <BlogCard id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={"3 dec, 2023"} key={idx} />
                </div>
            })}
        </div>
    </div>
}