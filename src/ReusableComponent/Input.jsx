import React from 'react'

export const Input = ({type, id, name, value, autoComplete, onChange, placeholder }) => {
    return (
            <input
            className='border-2 w-full pl-24 input-text text-[rgb(26,46,86)] lg:text-xl md:text-xl text-base border-blue-950 lg:py-5 py-4 px-5 rounded-full'

            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required
        />
    )
}



