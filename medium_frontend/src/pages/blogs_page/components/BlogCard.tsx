import { Link } from "react-router-dom";
import { Avatar } from "../../../components/Avatar";


interface Card {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id:string
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: Card) => {
    return (
        
        <div className="w-screen max-w-screen-md shadow-md font-poppins flex justify-center flex-col">
            <Link to={`/blog/${id}`}>
            <div className="p-4">
                <div className="mt-4 flex gap-3 items-center">
                    <div>
                        <Avatar authorName={authorName} size="big" />
                    </div>
                    <div className="items-center">{authorName}</div>
                    <div className="items-center text-xs text-gray-500">&#9679;</div>
                    <div className="text-gray-500 items-center">{publishedDate}</div>
                </div>
                <div className="mt-4">
                    <div className=" text-xl font-bold max-w-lg">{title}</div>
                    <div className="mt-2 text-md max-w-lg">
                        {content.slice(0, 178) + "..."}
                    </div>
                </div>
                <div className="flex justify-between">


                    <div className="text-sm mt-6 text-gray-500">
                        {`${Math.ceil(content.length / 100)} min read`}
                    </div>
                    <div className="mt-6 flex justify-between gap-4">
                        <div >
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </button>
                        </div>
                        <div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};


