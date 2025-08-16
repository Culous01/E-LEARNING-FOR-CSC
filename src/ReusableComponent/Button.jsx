import React from 'react'

export const Button = ({ children, onClick, type = 'button', isLoading = false }) => {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={isLoading}
        className="w-full lg:p-5 md:p-4 p-3 mt-3 rounded-full text-amber-400 lg:text-2xl md:text-xl text-base font-bold bg-blue-950 cursor-pointer"
        >
        {isLoading ? 'Loading...' : children}
        </button>
    )
}

// export const Button = ({ title, OnClick, type = 'button', isLoading = false}) => {
//     return (
//         <button
//             className="w-full p-5 mt-4 rounded-full text-amber-400 text-2xl font-bold bg-blue-950 cursor-pointer"
//             type={type}
//             disabled={isLoading}
//             onClick={OnClick}
//             >
//             {isLoading ? 'Loading...' : title}
//         </button>
//     )
// }
