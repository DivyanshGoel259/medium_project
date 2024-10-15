interface button{
    title:string,
    onClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

}

export const Button = ({title,onClick}:button)=>{

    return <div className="font-poppins">
        <button className="py-2 rounded-[8px] w-full bg-[#18181a] text-white" onClick={onClick}>{title}</button>
    </div>

}