import PastQuestionsImg from '../Assets/PastQuestionsImg.jpg';

export const ManagePastQuestionsCard = ({pastQuestionsImg, courseTitle, level, semester}) => {
    return (
        <div className="grid grid-cols-2 lg:gap-10 md:gap-10 gap-5">
            <div className='flex flex-col justify-center space-y-5 shadow-xl rounded-2xl lg:p-5 p-3.5'>
                <div className="w-full aspect-[16/10] overflow-hidden">
                    <img src={PastQuestionsImg} className='rounded-xl w-full h-full object-cover'  alt="PastQuestionsImg"/>
                </div>

                <div className="flex flex-col lg:space-y-2 md:space-y-2 space-y-0.5 mb-3">
                    <p className="lg:text-xl md:text-base text-xs break-words whitespace-normal">
                        Course Title: {courseTitle}
                    </p>

                    <p className="lg:text-xl md:text-base text-xs break-words whitespace-normal">
                        Level: {level}
                    </p>
                    
                    <p className="lg:text-xl md:text-base text-xs break-words whitespace-normal">
                        Semester: {semester}
                    </p>
                </div>
            </div>
        </div>
    )
}
