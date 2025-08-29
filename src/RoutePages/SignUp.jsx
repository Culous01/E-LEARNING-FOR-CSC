import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import SignUpForm from '../ReusableComponent/SignUpForm';
import { MdKeyboardArrowLeft } from "react-icons/md";


export const BackwardIcon = () => {
    const navigate = useNavigate();
    
    return (
        <MdKeyboardArrowLeft className='absolute bg-blue-950 text-amber-400 rounded-xl top-1 text-4xl cursor-pointer' onClick={() => {navigate(-1)}} />
    )
}

const SignUp = () => {

    return (
        <main className="relative min-h-screen overflow-hidden">
        {/* Background decoration */}
        <div className="absolute block sm:hidden md:block -right-14 -bottom-13 rotate-12 -z-10">
            <div className="w-30 h-30 bg-slate-100 rounded-full -mb-1.5"></div>
            <div className="w-36 h-36 bg-slate-100 rounded-full"></div>
        </div>

        {/* Navbar */}
        <Disclosure
            as="nav"
            className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
            >
            <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-10">
            <div className="relative flex h-12 items-center justify-between">
                <div className="flex shrink-0 items-center">
                <a href="/Home" className="text-2xl text-blue-950 font-bold">   
                    LOGO
                </a>
            {/* <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
            /> */}
                </div>
            </div>
            </div>
        </Disclosure>

        {/* Main Sign Up Form */}
        <div className="flex justify-center lg:mt-5">
            <div className="w-full max-w-xl p-5 flex flex-col">
                <div className='relative'>
                    <BackwardIcon />
                    <h1 className="mb-13 text-blue-950 lg:text-4xl text-3xl font-bold text-center">
                        Sign Up
                    </h1>
                </div>

            {/* ✅ Form component */}
            <SignUpForm />

            {/* Divider */}
            <div className="w-full h-0.5 bg-blue-950 mt-8"></div>

            {/* Redirect to login */}
            <p className="mt-8 text-base text-center font-bold text-blue-950">
                Already have an account?{' '}
                <a href="/Login" className="underline">
                Log In
                </a>
            </p>
            </div>
        </div>
        </main>
    );
};

export default SignUp;
