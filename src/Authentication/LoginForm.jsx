import React, { useState } from 'react';
import { Input } from '../ReusableComponent/Input.jsx'; // <-- Using reusable Input
import { Button } from '../ReusableComponent/Button.jsx'; // <-- Using reusable Button
import { LuCircleUserRound } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        // TODO: Add API call logic here

        // const fetchData = async () => {
        //     try {
        //         const data = await 
        //     } catch (error) {
                
        //     }
        // } 

        console.log('Logging in with:', { username, password });
        
        setTimeout(() => {
        setIsLoading(false);
        // alert("Login successful!"); // or navigate to dashboard
    }, 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="lg:space-y-10 md:space-y-8 space-y-7 flex flex-col">

            <div className='w-full relative'>
                <LuCircleUserRound className="absolute left-8 text-amber-400 text-3xl top-1/2 transform -translate-y-1/2 " />
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
            </div>

            <div className='w-full relative'>
                <MdLockOutline className="absolute left-8 text-amber-400 text-3xl top-1/2 transform -translate-y-1/2 "/>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>

            <a href="/forgot-password" className='-mt-5 mr-7 font-bold text-base text-blue-950 hover:underline flex justify-end'>Forget a password?</a>
            <Button type="submit" isLoading={isLoading}>
                Log In
            </Button>
        </form>
    );
};  