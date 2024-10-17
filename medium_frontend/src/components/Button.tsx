interface button{
    title:string,
    onClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

}

export const Button = ({title,onClick}:button)=>{

    return <div className="font-poppins">
        <button className="py-2 px-4 rounded-full w-full bg-slate-800 text-white" onClick={onClick}>{title}</button>
    </div>

}