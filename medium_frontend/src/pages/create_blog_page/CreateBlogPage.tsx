import { useState } from "react"
import { AppBar } from "../../components/AppBar"
import { TextArea } from "./components/TextArea"
import { postBlog } from "./api"
import { measureMemory } from "vm"

export const CreateBlog = () => {
    const [post, setPost] = useState({
        title: "",
        content: ""
    })
    const [error, setError] = useState(null)
    const [message, setMessage] = useState("")



    const handleClick = () => {
        postBlog(post).then((response) => {
            
            const [data, err] = response
            if (!data) return null
            if (err) {
                
                setError(err)
            }
            setMessage(data.message)
            console.log(message);
        })
    }

    if (message == "Post created successfully") {
        alert(message)
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

    </div>
}