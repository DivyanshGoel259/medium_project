import { useState } from "react"
import { AppBar } from "../../components/AppBar"
import { TextArea } from "./components/TextArea"
import { postBlog } from "./api"
import { Bounce, toast, ToastContainer } from "react-toastify"

export const CreateBlog = () => {
    const [post, setPost] = useState<any>({})
    const [error, setError] = useState<string|null>(null)
    const [message, setMessage] = useState("")



    const handleClick = () => {
        postBlog(post).then((response) => {
            
            const [data, err] = response
            if (err) {                
                setError(err.message)
            }
            if (!data) return
            if(data.post.id){
                setMessage("Post created successfully")
            }
        })
    }

    if (message == "Post created successfully") {
        toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
    } else {
        toast.error(message);
    }


    if (error) {
        return <div>Error: {error}</div>
    }

    return <div>
        <div>
            <AppBar handleClick={handleClick} buttonText="Publish" authorName="jh" />
        </div>
        
        <div className="flex justify-center items-center flex-col">
            <div className="mt-10">
                <TextArea onChange={(e) => {
                    let target = e.target as HTMLTextAreaElement;
                    setPost({ ...post, title: target.value })
                }} placeholder="Title" type="title" />
                <div className="mt-8">
                    <TextArea onChange={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        setPost({ ...post, content: target.value })
                    }} placeholder="Tell your story..." type="content" />
                </div>
            </div>
            
        </div>
        <ToastContainer/>

    </div>
}