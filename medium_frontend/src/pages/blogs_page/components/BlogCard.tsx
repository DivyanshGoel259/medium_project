interface blogCard {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
}: blogCard) => {
    return (
        <div className="w-full shadow-md font-poppins flex justify-center flex-col">
            <div className="p-4">
                <div className="flex gap-3 items-center">
                    <div>
                        <Avatar authorName={authorName}/>
                    </div>
                    <div className="items-center">{authorName}</div>
                    <div className="items-center text-xs text-gray-500">&#9679;</div>
                    <div className="text-gray-500 items-center">{publishedDate}</div>
                </div>
                <div>
                    <div className="mt-2 text-xl font-bold max-w-lg">{title}</div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="size-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="size-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </button>
                        </div>
                        <div>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="size-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Avatar = ({ authorName }:{authorName: string})=> {
    return <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{authorName[0]}</span>
    </div>

}