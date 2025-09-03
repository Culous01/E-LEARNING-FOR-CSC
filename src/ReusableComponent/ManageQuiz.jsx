import { useState } from 'react';

export const QuizInput = ({id, name, value, onchange}) => {
    return (
        <input 
            type="text"
            id={id}
            name={name}
            value={value}
            autoComplete="off"
            onChange={onchange}
            className='w-full flex items-center justify-between gap-2 border-2 border-[rgb(26,46,86)] py-2 px-4 rounded-xl font-bold text-blue-950 lg:text-xl md:text-xl text-base focus:outline-none'
        />
    )
}

export const ManageQuiz = () => {
    const [courseCode, setCourseCode] = useState('');
    const [courseTitle, setCourseTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    
    
    // Handle save button click
    const handleSave = () => {

    };

    return (
        <div className='w-full flex flex-col space-y-6 lg:p-8 md:p-8 p-4 rounded-2xl shadow-lg/20 my-10 shrink-0'>
            <h1 className='text-[rgba(26,46,86,1)] font-bold lg:text-4xl md:text-3xl text-2xl'>Manage Quiz</h1>


            <div className="flex flex-col space-y-6 mb-10">
                <div className="flex flex-col space-y-2">
                    <h1 className="text-[rgb(26,46,86)] lg:text-xl md:text-base text-xs">Course code :</h1>
                    <QuizInput 
                        type="text"
                        id="courseCode"
                        name="courseCode"
                        value={courseCode}
                        onchange={(e) => setCourseCode(e.target.value)}
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <h1 className="text-[rgb(26,46,86)] lg:text-xl md:text-base text-xs">Course Title :</h1>
                    <QuizInput 
                        type="text"
                        id="courseTitle"
                        name="courseTitle"
                        value={courseTitle}
                        onchange={(e) => setCourseTitle(e.target.value)}
                        autoComplete="off"
                        className='w-full flex items-center justify-between gap-2 border-2 border-[rgb(26,46,86)] py-2 px-4 rounded-xl font-bold text-blue-950 lg:text-xl md:text-xl text-base focus:outline-none'
                    
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <h1 className="text-[rgb(26,46,86)] lg:text-xl md:text-base text-xs">Question :</h1>
                    <QuizInput 
                        type="text"
                        id="question"
                        name="question"
                        value={question}
                        onchange={(e) => setQuestion(e.target.value)}
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <h1 className="text-[rgb(26,46,86)] lg:text-xl md:text-base text-xs">Option A :</h1>
                    <QuizInput 
                        type="text"
                        id="optionA"
                        name="optionA"
                        value={optionA}
                        onchange={(e) => setOptionA(e.target.value)}
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <h1 className="text-[rgb(26,46,86)] lg:text-xl md:text-base text-xs">Option B:</h1>
                    <QuizInput 
                        type="text"
                        id="optionB"
                        name="optionB"
                        value={optionB}
                        onchange={(e) => setOptionB(e.target.value)}
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <h1 className="text-[rgb(26,46,86)] lg:text-xl md:text-base text-xs">Option C :</h1>
                    <QuizInput 
                        type="text"
                        id="optionC"
                        name="optionC"
                        value={optionC}
                        onchange={(e) => setOptionC(e.target.value)}                   
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <h1 className="text-[rgb(26,46,86)] lg:text-xl md:text-base text-xs">Option D :</h1>
                    <QuizInput 
                        type="text"
                        id="optionD"
                        name="optionD"
                        value={optionD}
                        onchange={(e) => setOptionD(e.target.value)}
                    />
                </div>

                <div className="flex flex-col space-y-2">
                    <h1>Correct Answer :</h1>
                    <QuizInput 
                        type="text"
                        id="correctAnswer"
                        name="correctAnswer"
                        value={correctAnswer}
                        onchange={(e) => setCorrectAnswer(e.target.value)}
                    />
                </div>

                <div className='flex justify-end mt-5'>
                    <button onClick={handleSave} className='bg-[rgb(26,46,86)] text-[rgb(255,199,39)] font-bold px-16 py-3 rounded-xl'>Save</button>
                </div>
            </div>
        </div>
    )
}
