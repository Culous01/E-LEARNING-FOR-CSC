import React from 'react';
import { Navbar } from "../ReusableComponent/Navbar";
import { FeatureCard } from '../ReusableComponent/FeatureCard';
import Student from "../assets/Student.gif";
import DocumentBooks from "../assets/DocumentBooks.png";
import Questions from "../assets/Questions.png";
import Quiz from "../assets/Quiz.png";
import Updates from "../assets/Updates.png";

const Home = () => {
    return (
        <>
            <Navbar />

            <div className='flex justify-center mr-6 -mt-15'>
                <img src={Student} className='studentImage' alt=""/>
            </div>

            <div className='flex flex-col space-y-10 lg:space-y-14 justify-center items-center text-center mt-2'>
                <h1 className='studyHub lg:max-w-4xl md:max-w-3xl max-w-xl/10 px-1 text-3xl/10 md:text-5xl/15 lg:text-7xl/25 font-extrabold'>YOUR STUDY HUB <br /><span>FOR COMPUTER SCIENCE</span></h1>
                <p className='why-choose font-semibold text-gray-500 text-xl/8 md:text-4xl/13 lg:text-5xl/18 font-Playfair'>Why choose LAUTECH<br/>E-Learning?</p>
            </div>

            {/* Feature-selection */}
            <div className='feature-selection mt-6 p-5 lg:p-20 md:p-10 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 lg:gap-10 md:gap-10 gap-5 justify-center'>
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
            
            <div className='flex justify-center mb-20 mt-10 lg:px-5 md:px-5 px-14'>
                    <a href="/Login" className='w-xl p-5 bg-blue-950 rounded-xl text-center lg:text-2xl md:text-2xl text-xl text-amber-400 font-bold'>GET STARTED</a>
            </div>
        </>
    )
}

export default Home