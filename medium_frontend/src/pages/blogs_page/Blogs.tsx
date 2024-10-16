
import { AppBar } from "../../components/appBar"
import { useBlogs } from "../../hooks/useBlogs"
import { BlogCard } from "./components/BlogCard"



export const Blogs = () => {
    const { blogs, isLoading } = useBlogs()

    if (isLoading) {
        return <div>
            <h1>Loading...</h1>
        </div>
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