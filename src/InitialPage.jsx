import React from 'react';
import { Navbar } from "./ReusableComponent/Navbar";
import { FeatureCard } from './ReusableComponent/FeatureCard';
import Student from "../public/Student.gif";
import DocumentBooks from "../public/DocumentBooks.png";
import Questions from "../public/Questions.png";
import Quiz from "../public/Quiz.png";
import Updates from "../public/Updates.png";

const InitialPage = () => {
    return (
        <>
            <Navbar />

            <div className='flex justify-center mr-6'>
                <img src={Student} alt="" />

            </div>

            <div className='flex flex-col space-y-10 lg:space-y-14 justify-center items-center text-center mt-6'>
                <h1 className='max-w-4xl text-4xl/13 md:text-5xl/15 lg:text-7xl/25 font-bold'>YOUR STUDENT HUB FOR COMPUTER SCIENCE</h1>
                <p className='font-semibold text-gray-500 text-3xl/13 md:text-4xl/13 lg:text-5xl/18 font-Playfair'>Why choose LAUTECH<br/>E-Learning?</p>
            </div>

            {/* Feature-selection */}
            <div className='feature-selection mt-10 p-5 lg:p-20 md:p-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 justify-center'>
                <FeatureCard 
                    icons = {DocumentBooks}
                    title = "Manuals (PDFs)"
                    description= "Manuals for each course is chapter-organized in PDF format for easy access"
                />
                <FeatureCard 
                    icons = {Questions}
                    title = "Past questions"
                    description= "Access a collection of past exam questions organized by course or effective practice"
                />
                <FeatureCard 
                    icons = {Quiz}
                    title = "Quizzes"
                    description= "Interactive quizzes designed to test your knowledge and track your progress"
                />
                <FeatureCard 
                    icons = {Updates}
                    title = "Constant Updates"
                    description= "Ensuring you get the best learning experience"
                />
            </div>
            
            <div className='flex justify-center mb-10 p-5'>
                    <a href="#" className='w-xl p-5 bg-blue-950 rounded-xl text-center text-2xl text-amber-400 font-bold'>GET STARTED</a>
            </div>
        </>
    )
}

export default InitialPage