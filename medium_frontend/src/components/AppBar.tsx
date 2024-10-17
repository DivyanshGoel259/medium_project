import { useNavigate } from "react-router-dom"
import { Avatar } from "./Avatar"
import { Button } from "./Button"

export const AppBar = ({ authorName ,buttonText,handleClick}: { authorName: string ,buttonText : string, handleClick? :()=> void}) => {
    const navigate = useNavigate()
    const handleNavigate = ()=>{navigate("/create")}
    
    
    return <div className="font-poppins flex justify-between p-3 border border-gray-200 ">
        <div className="ml-4 text-sm font-semibold flex justify-center flex-col ">
            Medium
        </div>
        <div className="mr-4 flex justify-between gap-6">
            <div>
                <Button onClick={!handleClick?handleNavigate:handleClick} title={buttonText}/>
            </div>
            <div className="flex justify-center flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

            </div>
            <div className="flex justify-center flex-col">
                <Avatar authorName={authorName} size="big" />
            </div>
        </div>
    </div>
}