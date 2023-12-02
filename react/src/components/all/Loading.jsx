import React from 'react';

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-300 bg-opacity-50">
            <div className="relative border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin">
                {/* Inner circles for the spinner */}
                <div className="absolute top-0 w-full h-full rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;
