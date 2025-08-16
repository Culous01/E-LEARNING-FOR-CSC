import React from 'react';
import { Disclosure} from '@headlessui/react'
import { LoginForm } from '../Authentication/LoginForm';

const Login = () => {
    return (
        <>
        <Disclosure
                as="nav"
                className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
                >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                    <div className="relative flex h-12 items-center justify-between">
                        <div className="flex shrink-0 items-center">
                            <a href="/" className='text-2xl text-blue-950 font-bold'>LOGO</a>
                            {/* <img
                                alt="Your Company"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            /> */}
                        </div>
                    </div>
                </div>
        </Disclosure>
        
            <div className="flex items-center justify-center min-h-screen -mt-12">
                <div className="w-full max-w-xl p-5 flex flex-col">
                    <h1 className="mb-15 lg:text-4xl text-3xl text-blue-950 font-bold text-center">Login your details</h1>
                    <LoginForm />

                    <div className='w-full h-0.5 bg-blue-950 mt-14'></div>

                    <p className="mt-10 text-base text-center font-bold ">
                        Don't have an account? <a href="/Signup" className="text-blue-950 hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login