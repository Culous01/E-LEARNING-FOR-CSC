import React from 'react'
import { LoginForm } from '../Authentication/LoginForm';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md">
                <h1 className="mb-6 text-2xl font-bold text-center">Login Your Details</h1>
                <LoginForm />

                <hr />

                <p className="mt-4 text-sm text-center">
                    Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login