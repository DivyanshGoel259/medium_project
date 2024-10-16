export const Avatar = ({ authorName, size }: { authorName: string, size: "small" | "big" }) => {
    return <div className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-8 h-8"}`}>
        <span className="font-medium text-gray-600 dark:text-gray-300">{authorName[0]}</span>
    </div>

}