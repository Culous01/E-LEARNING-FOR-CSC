import React from 'react';


export const FeatureCard = ({icons, title, description}) => {
    return (
        <div className=' bg-slate-100 flex flex-col space-y-4 lg:p-10 md:p-10 p-5 rounded-xl cursor-pointer border-2 border-slate-100 hover:border-blue-950'>
            <div className='w-fit icons-container'>
                <img src={icons} className='icons' alt="icons" />
            </div>
            <h3 className='lg:text-4xl md:text-3xl title-text text-normal font-bold font-Playfair'>{title}</h3>
            <p className='lg:text-2xl md:text-2xl text-xs description-text font-Poppins font-normal'>{description}</p>
        </div>
    )
}
