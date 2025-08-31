export const PastQuestionsCard = ({imageUrl, year}) => {
    return (
        <div className='flex flex-col justify-center  rounded-xl shadow-xl/20'>
            <div className="w-full h-full overflow-hidden" onClick={() => window.open(imageUrl, "_blank")}>
                <img src={imageUrl} className='rounded-t-xl w-full object-cover' alt="PqImg" />
            </div>

            <div>
                <p className='text-center text-wrap px-5 py-4 text-[rgb(26,46,86)] font-bold '>{year || "No year found"}</p>
            </div>
        </div>
    )
}
