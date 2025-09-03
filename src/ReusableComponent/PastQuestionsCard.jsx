export const PastQuestionsCard = ({imageUrl, year}) => {
    return (
        <div className='flex flex-col justify-center  rounded-xl shadow-xl/20'>
            <div className="w-full aspect-[16/9] overflow-hidden" onClick={() => window.open(imageUrl, "_blank")}>
                <img src={imageUrl} className='rounded-t-xl w-full h-full object-cover' alt="PqImg" />
            </div>

            <p className='text-center text-wrap px-5 py-4 text-[rgb(26,46,86)] font-bold lg:text-base md:text-base text-xs'>{year || "No year found"}</p>
        </div>
    )
}
