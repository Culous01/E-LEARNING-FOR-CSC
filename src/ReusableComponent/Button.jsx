import React from 'react';

export const Spinner = () => {
    return (
        <svg
        className="animate-spin h-5 w-5 text-amber-300" // animate-spin does the magic!
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        ></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
        </svg>
    );
};

export const Button = ({ children, onClick, type = 'button', isLoading = false }) => {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={isLoading}
        className="w-full lg:p-5 md:p-4 p-3 mt-3 rounded-full text-amber-400 lg:text-2xl md:text-xl text-base font-bold bg-[rgb(26,46,86)] cursor-pointer"
        >
        {isLoading ? (<div className='flex justify-center items-center gap-3'> <Spinner/> <span>Loading</span></div>) : children}
        </button>
    )
}
