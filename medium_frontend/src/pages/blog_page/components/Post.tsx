import { Post as post } from "../../../types"


export const Post = ({ post }: { post: post }) => {
    return <div className="font-poppins flex justify-center flex-col">
            <div className="flex justify-center max-w-screen-md ">
                <div className="">
                    <div className="font-extrabold text-5xl ">
                        {post.title}
                    </div>
                    <div className="mt-4 text-md text-gray-500">
                        Posted on August 24, 2013
                    </div>
                    <div className="text-gray-600 mt-4">
                        {post.content}
                    </div>

                </div>
            </div>
         

    </div>
}