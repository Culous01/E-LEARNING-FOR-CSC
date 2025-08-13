import React, { useState } from 'react';
import { Input } from '../ReusableComponent/Input.jsx'; // <-- Using reusable Input
import { Button } from '../ReusableComponent/Button.jsx'; // <-- Using reusable Button

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // setIsLoading(true);
        // TODO: Add API call logic here
        console.log('Logging in with:', { email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />  
            <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />

            <p>Forget a password?</p>

            <Button title='Login' type="submit"  Onclick={handleSubmit} />
        </form>
    );
};  