export const AuthorLoadingUI = () => {
    return (
        <div className="font-poppins animate-pulse">
            <div className="text-sm font-semibold">
                Author
            </div>
            <div className="flex p-2">
                <div className="flex justify-center flex-col items-center">
                    {/* Avatar Skeleton */}
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div> {/* Simulates avatar loading */}
                </div>
                <div className="ml-4">
                    {/* Name Skeleton */}
                    <div className="h-6 bg-gray-200 rounded-full w-36 mb-2"></div> {/* Simulates author name */}
                    
                    {/* Description Skeleton */}
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded-full max-w-md"></div> {/* Simulates description line 1 */}
                        <div className="h-4 bg-gray-200 rounded-full max-w-md"></div> {/* Simulates description line 2 */}
                    </div>
                </div>
            </div>
        </div>
    );
};
