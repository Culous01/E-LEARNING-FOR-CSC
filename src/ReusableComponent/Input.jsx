import React from 'react'

export const Input = ({type, value, autocomplete, onChange, placeholder }) => {
    return (
            <input
            className='border-2 w-full pl-20 input-text text-blue-950 lg:text-xl md:text-xl text-base border-blue-950 lg:py-5 py-4 px-5 rounded-full'

            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autocomplete}
            required
        />
    )
}
