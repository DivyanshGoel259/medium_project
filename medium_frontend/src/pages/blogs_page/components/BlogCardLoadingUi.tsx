export const BlogCardLoadingUi = () => {
    return <div className="w-screen max-w-screen-md shadow-md font-poppins flex justify-center flex-col animate-pulse">
        <div className="p-4">
            {/* Author and Date Skeleton */}
            <div className="mt-4 flex gap-3 items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div> {/* Avatar */}
                <div className="w-24 h-4 bg-gray-200 rounded-full"></div> {/* Author name */}
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div> {/* Dot separator */}
                <div className="w-20 h-4 bg-gray-200 rounded-full"></div> {/* Published Date */}
            </div>

            {/* Title and Content Skeleton */}
            <div className="mt-4">
                <div className="h-6 bg-gray-200 rounded-full max-w-lg"></div> {/* Title */}
                <div className="mt-2 h-4 bg-gray-200 rounded-full max-w-lg"></div> {/* Content Line 1 */}
                <div className="mt-2 h-4 bg-gray-200 rounded-full max-w-lg"></div> {/* Content Line 2 */}
                <div className="mt-2 h-4 bg-gray-200 rounded-full max-w-lg"></div> {/* Content Line 3 */}
            </div>

            {/* Footer - Read Time and Icons */}
            <div className="flex justify-between">
                <div className="text-sm mt-6 w-16 h-4 bg-gray-200 rounded-full"></div> {/* Min read */}
                <div className="mt-6 flex justify-between gap-4">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div> {/* Icon 1 */}
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div> {/* Icon 2 */}
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div> {/* Icon 3 */}
                </div>
            </div>
        </div>
        <div className="p-4">
            {/* Author and Date Skeleton */}
            <div className="mt-4 flex gap-3 items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div> {/* Avatar */}
                <div className="w-24 h-4 bg-gray-200 rounded-full"></div> {/* Author name */}
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div> {/* Dot separator */}
                <div className="w-20 h-4 bg-gray-200 rounded-full"></div> {/* Published Date */}
            </div>

            {/* Title and Content Skeleton */}
            <div className="mt-4">
                <div className="h-6 bg-gray-200 rounded-full max-w-lg"></div> {/* Title */}
                <div className="mt-2 h-4 bg-gray-200 rounded-full max-w-lg"></div> {/* Content Line 1 */}
                <div className="mt-2 h-4 bg-gray-200 rounded-full max-w-lg"></div> {/* Content Line 2 */}
                <div className="mt-2 h-4 bg-gray-200 rounded-full max-w-lg"></div> {/* Content Line 3 */}
            </div>

            {/* Footer - Read Time and Icons */}
            <div className="flex justify-between">
                <div className="text-sm mt-6 w-16 h-4 bg-gray-200 rounded-full"></div> {/* Min read */}
                <div className="mt-6 flex justify-between gap-4">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div> {/* Icon 1 */}
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div> {/* Icon 2 */}
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div> {/* Icon 3 */}
                </div>
            </div>
        </div>

    </div>
}