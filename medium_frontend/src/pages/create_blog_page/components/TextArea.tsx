
export const TextArea = ({onChange , type , placeholder}:{type:"title"|"content" , placeholder : string , onChange:(e:React.FormEvent<HTMLTextAreaElement>)=>void}) => {

    return <div className="h-full w-screen max-w-screen-lg items-center">
        <textarea onChange={onChange} placeholder={placeholder} className={`${type==="title"?"resize-y w-full h-full focus:outline-none placeholder:text-gray-300 text-6xl font-serif":"resize-y w-full h-full focus:outline-none placeholder:text-gray-300 text-xl font-serif"}`} />
    </div>
}