import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Disclosure} from '@headlessui/react'
import { LoginForm } from '../ReusableComponent/LoginForm';
import { BackwardIcon } from './SignUp';
// import { MdKeyboardArrowLeft } from "react-icons/md";



const Login = () => {
    const navigate = useNavigate();

    return (
        <>
        <main className='relative min-h-screen overflow-hidden'>
            <div className='absolute block sm:hidden md:block -left-11 -bottom-13 -rotate-6 -z-10'>
                <div className='w-30 h-30 bg-slate-100 rounded-full -mb-1.5'></div>
                <div className='w-36 h-36 bg-slate-100 rounded-full'></div>
            </div>
        <Disclosure
                as="nav"
                className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
                >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="relative flex h-12 items-center justify-between">
                        <div className="flex shrink-0 items-center">
                            <a href="/Home" className='text-2xl text-blue-950 font-bold'>LOGO</a>
                            {/* <img
                                alt="Your Company"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            /> */}
                        </div>
                    </div>
                </div>
        </Disclosure>
        
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-xl p-5 flex flex-col">
                    <div className='relative'>
                        <BackwardIcon />
                        <h1 className="mb-15 lg:pl-2 md:pr-20 pl-10 lg:text-4xl text-3xl text-blue-950 font-bold text-center"> Login your details</h1>
                    </div>
                    <LoginForm />

                    <div className='w-full h-0.5 bg-blue-950 lg:mt-14 md:mt-14 mt-10'></div>

                    <p className="lg:mt-10 md:mt-10 mt-7  text-base text-center font-bold text-blue-950">
                        Don't have an account? <a href="/Signup" className="underline">Sign up</a>
                    </p>
                </div>
            </div>
        </main>
        </>
    )
}

export default Login