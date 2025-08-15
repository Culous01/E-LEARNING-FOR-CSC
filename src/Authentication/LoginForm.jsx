import React, { useState } from 'react';
import { Input } from '../ReusableComponent/Input.jsx'; // <-- Using reusable Input
import { Button } from '../ReusableComponent/Button.jsx'; // <-- Using reusable Button
import { LuCircleUserRound } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // setIsLoading(true);
        // TODO: Add API call logic here
        console.log('Logging in with:', { username, password });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-10 flex flex-col">

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

            <a href="" className='-mt-8 mr-10 font-bold lg:text-base text-xs hover:underline flex justify-end'>Forget a password?</a>
            
            <Button  title='Log In' type="submit"  Onclick={handleSubmit} />
        </form>
    );
};  