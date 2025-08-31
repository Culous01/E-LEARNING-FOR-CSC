import { NavBars } from '../ReusableComponent/Navbar';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { PastQuestionsCard } from '../ReusableComponent/PastQuestionsCard';

const PastQuestion = () => {
    const { courseCode } = useParams();
    const [pastQuestions, setPastQuestions] = useState([]);

    const getPastQuestions = async () => {
    try {
        const response = await fetch(`https://final-year-project-elearing-backend.onrender.com/api/v1/pastQuestions/getPastQuestionsPerCourse/${courseCode}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        let data = await response.json();
        data = data.pastQuestions;
        console.log(data); // Assuming the API returns an array of past questions
        setPastQuestions(Array.isArray(data) ? data : []);
    } catch (error) {
        console.error('Error fetching past questions:', error);
        return [];
    }    
}

    useEffect(() => {
        getPastQuestions();
    }, [courseCode]);

    // console.log(courseCode); // Log the courseCode to verify it's being captured correctly

    return (
        <div className='h-screen'>
            <NavBars />

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl p-5 flex flex-col">
                    <h1 className="lg:mb-14 mb-10 lg:text-4xl text-3xl text-[rgb(26,46,86)] font-bold text-center">Past Questions ({courseCode})</h1>

                {pastQuestions.length > 0 ? (
                <div className="grid grid-cols-2 gap-5">
                    {pastQuestions.map((question, index) => (
                    <PastQuestionsCard
                        key={question._id || index}
                        imageUrl={question.imageUrl}    
                        year={question.year}
                    />
                    ))}
                </div>
                ) : (
                <div className="flex justify-center items-center h-64">
                    <p className="text-gray-500 text-lg">No courses available</p>
                </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default PastQuestion