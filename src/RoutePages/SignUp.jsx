import React from 'react';
import { Disclosure} from '@headlessui/react';
import { SignUpForm } from '../Authentication/SignUpForm';

const SignUp = () => {
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

            <div className="flex items-center justify-center min-h-screen">
                <div className="w-full max-w-xl p-5 flex flex-col">
                    <h1 className="mb-13 text-3xl font-bold text-center">Sign Up</h1>

                    <SignUpForm />
                    
                    <div className='w-full h-0.5 bg-blue-950 mt-8'></div>
                    <p className="mt-8 text-base text-center font-bold ">
                        Already have an account? <a href="/Login" className="text-blue-950 hover:underline">Log In</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp