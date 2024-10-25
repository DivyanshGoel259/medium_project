export const PostLoadingUi = () => {
    return (
        <div className="font-poppins flex justify-center flex-col">
            <div className="flex justify-center max-w-screen-lg animate-pulse">
                <div>
                    {/* Title Skeleton */}
                    <div className="h-12 bg-gray-200 rounded-full w-full mb-4"></div> {/* Simulates the post title */}
                    
                    {/* Date Skeleton */}
                    <div className="h-4 bg-gray-200 rounded-full w-32 mt-4 mb-4"></div> {/* Simulates the date */}
                    
                    {/* Content Skeleton */}
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded-full max-w-lg"></div>
                        <div className="h-4 bg-gray-200 rounded-full max-w-lg"></div>
                        <div className="h-4 bg-gray-200 rounded-full max-w-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
