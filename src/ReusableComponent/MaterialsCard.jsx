import React from 'react'

export const ViewButton = ({text, bgColor, onClick}) => {
    return (
        <button
        onClick={onClick}
        className='w-full lg:py-3 md:py-3 py-0.5 px-1 text-center rounded-4xl text-white font-medium 
                    shadow-md hover:opacity-90 transition-all duration-300 lg:text-xl md:text-base text-[8px]/1.5' style={{backgroundColor: bgColor}}>
            {text}
        </button>
    )
}

const MaterialsCard = ({cardImage, courseCode, title, pdfUrl}) => {

    return (
        <div className='flex flex-col bg-white shadow-xl/30 space-y-2 rounded-2xl overflow-hidden'>
            <div className='w-full flex flex-col lg:space-y-6 space-y-3 lg:p-5 md:p-5 p-2'>
                <div className='w-full lg:h-96 md:h-96 h-30 rounded-xl overflow-hidden'>
                    <img src={cardImage} className='w-full h-full object-cover rounded-xl' alt="" />
                </div>

                <h3 className='lg:text-2xl md:text-xl text-xs font-medium text-[rgb(26,46,86)]'>{courseCode}</h3>
                <p className='lg:text-xl md:text-base text-[10px]'>{title}</p>
            </div>

            <div className='flex flex-col lg:space-y-3 md:space-y-3 space-y-1'>
                <div className='flex items-center shadow-md inset-shadow-xs lg:space-x-5 md:space-x-4 space-x-1 lg:px-5 lg:py-2 md:px-5 md:py-2 px-2 py-2'>
                    <div className='lg:w-25 md:w-21 w-16'>
                        <p className='lg:text-xl md:text-base text-[10px]'>View as :</p>
                    </div>
                    
                    <div className='w-full h-full flex justify-center lg:space-x-4 md:space-x-3 space-x-2'>
                        <ViewButton 
                        text='PDF'
                        bgColor='rgb(26,46,86)'
                        onClick={() => window.open(pdfUrl, "_blank")}  // ✅ open PDF directly
                        />

                        <ViewButton 
                        text='Module'
                        bgColor='rgb(26,46,86)'
                        />
                    </div>
                </div>

                <div className='flex items-center shadow-md inset-shadow-xs shadow-gray-800 lg:space-x-5 md:space-x-4 space-x-1 lg:px-5 lg:py-2 md:px-5 md:py-2 px-2 py-2'>
                    <div className='lg:w-25 md:w-20 w-16'>
                        <p className='lg:text-xl md:text-base text-[10px]'>Practice:</p>
                    </div>
                    
                    <div className='w-full h-full flex justify-center lg:space-x-4 md:space-x-3 space-x-2'>
                        <ViewButton 
                        text='Past question'
                        bgColor='rgb(33,158,188)'
                        />

                        <ViewButton 
                        text='Quiz'
                        bgColor='rgb(251,133,0)'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialsCard