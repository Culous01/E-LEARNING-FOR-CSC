import React from 'react'

// const Button = ({ children, onClick, type = 'button', isLoading = false }) => {
//     return (
//         <button
//         type={type}
//         onClick={onClick}
//         disabled={isLoading}
//         className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
//         >
//         {isLoading ? 'Loading...' : children}
//         </button>
//     )
// }

export const Button = ({ title, OnClick, type}) => {
    return (
                <button
        type={type}
        onClick={OnClick}
        className="w-full px-4 py-2 "
        >
        {title}
        </button>
    )
}
