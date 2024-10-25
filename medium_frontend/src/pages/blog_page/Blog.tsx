import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchBlog } from "./api"
import { Post } from "./components/Post"
import { AppBar } from "../../components/AppBar"
import { Author } from "./components/Author"
import { PostLoadingUi } from "./components/PostLoadingUi"
import { AuthorLoadingUI } from "./components/AuthorLoadingUi"

export const Blog = () => {
    let { postId } = useParams()
    const [error, setError] = useState<String | null>(null)
    const [post, setPost] = useState<any>({})
    const [isLoading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        if (!postId) return
        fetchBlog(postId).then(response => {
            const [data, err] = response
            if (err) {
                setError(err.message)
                setLoading(false)
                return
            } 
            setPost(data)
            setLoading(false)
        })
    }, [])

    
    if (error) {
        return <h1>Error: {error}</h1>
    }
    return <div>
        <div>
            <AppBar buttonText="Create Blog" authorName={"JK"} />
        </div>

        <div className="p-6 grid grid-cols-10 mt-6">
            <div className="col-span-6 flex justify-center flex-col items-center">
                {isLoading?<PostLoadingUi></PostLoadingUi>:<Post post={post} />}
            </div>
            <div className="col-span-4">
                {isLoading?<AuthorLoadingUI></AuthorLoadingUI>:<Author post={post} Description="Master of Mirth ,purveyor of puns,and the funniest person in the kingdom" />}
            </div>
        </div>

    </div>
}