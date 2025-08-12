import React from 'react';


export const FeatureCard = ({icons, title, description}) => {
    return (
        <div className=' bg-slate-100 flex flex-col space-y-8 p-10 rounded-xl cursor-pointer border-2 border-slate-100 hover:border-blue-950'>
            <div>
                <img src={icons} alt="icons" />
            </div>
            <h3 className='lg:text-4xl md:text-3xl text-2xl font-bold font-Playfair'>{title}</h3>
            <p className='lg:text-2xl text-base font-Poppins font-normal'>{description}</p>
        </div>
    )
}
