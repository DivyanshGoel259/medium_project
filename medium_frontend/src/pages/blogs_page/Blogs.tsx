
import { useBlogs } from "../../hooks/useBlogs"

export const Blogs = ()=>{
    const {blogs,isLoading} = useBlogs()
    console.log(blogs)
    if(isLoading){
        return <div>...Loading</div>
    } 
    return <div>
        {blogs.map((blog)=>{
            return <div>

            </div>
        })}
    </div>
    
    
}