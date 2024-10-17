import { Avatar } from "../../../components/Avatar"
import { Post } from "./Post"

export const Author = ({post,Description}:{post:Post,Description:string})=>{
    return <div className="font-poppins ">
        <div className="text-sm font-semibold">
            Author
        </div>
        <div className="flex p-2 ">
            <div className="flex justify-center flex-col items-center ">
                <Avatar authorName={post.author.name} size="big"/>
            </div>
            <div className="ml-4 ">
                <div className="text-2xl font-semibold">
                    {post.author.name}
                </div>
                <div className="max-w-md text-md text-gray-500 mt-2">
                    {Description}
                </div>
            </div>
            
        </div>
    </div>
}