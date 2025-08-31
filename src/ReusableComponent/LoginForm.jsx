import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../Contexts/AuthContext.jsx'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from '../ReusableComponent/Input.jsx';
import { Button } from '../ReusableComponent/Button.jsx';
import { EmailIcon } from './SignUpForm.jsx';
import { MdLockOutline } from "react-icons/md";

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth(); // <-- Use the context hook

const handleSubmit = async (event) => {
        event.preventDefault();
        await login({ email, password }, setIsLoading)
}

    return (
        <form onSubmit={handleSubmit} className="lg:space-y-10 md:space-y-8 space-y-7 flex flex-col">
            <div className='w-full relative'>
                <EmailIcon />
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </div>

            <div className='w-full relative'>
                <MdLockOutline className="absolute left-10 text-amber-400 text-3xl top-1/2 transform -translate-y-1/2 "/>
                
                <Input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
            </div>

            <Button type="submit" isLoading={isLoading}>
                Log In
            </Button>
        </form>
    );
};