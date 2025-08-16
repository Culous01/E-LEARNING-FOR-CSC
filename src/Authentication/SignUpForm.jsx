import React, { useState } from 'react';
import { Input } from '../ReusableComponent/Input.jsx'; // <-- Using reusable Input
import { Button } from '../ReusableComponent/Button.jsx'; // <-- Using reusable Button
import { LuCircleUserRound } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


const DropdownButton = ({ label, options, onSelect }) => {
    const [selected, setSelected] = useState(label);
    const [open, setOpen] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
        if (onSelect) {
        onSelect(option); // Trigger the event
        }
    };

    return (
        <div className="w-full relative inline-block text-left">
        {/* Button */}
            <button
                type='button'
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-center gap-2 border-2 border-blue-950 lg:px-5 lg:py-3 md:px-4 md:py-3 p-3 rounded-full font-bold text-blue-950 lg:text-xl md:text-xl text-base focus:outline-none"
            aria-required
            >
                <span>{selected}</span>
                {!open ? <IoMdArrowDropdown className="text-blue-950 lg:text-4xl md:text-3xl text-2xl" /> : <IoMdArrowDropright className='text-blue-950 lg:text-4xl md:text-3xl text-2xl' />}
            </button>

        {/* Dropdown Items */}
        {open && (
            <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10">
                <ul className="py-1 text-sm">
                    {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelect(option)}
                        className="px-4 py-2 hover:bg-blue-950 hover:text-white cursor-pointer"
                    >
                        {option}
                    </li>
                    ))}
                </ul>
            </div>
        )}
        </div>
    );
};


export const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [level, setLevel] = useState('');
    const [semester, setSemester] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        // TODO: Add API call logic here
        console.log('Signing up with:', { username, email, password, level, semester});

        setTimeout(() => {
            setIsLoading(false);
            alert('Account created successfully!');
    }, 1000); // simulate API
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">

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
                <AiOutlineMail className="absolute left-8 text-amber-400 text-3xl top-1/2 transform -translate-y-1/2 " />
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
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

            <div className=" flex gap-4 mt-3">
                <DropdownButton label="Level" options={["100", "200", "300", "400"]} onSelect={setLevel} />
                <DropdownButton label="Semester" options={["First", "Second"]} onSelect={setSemester}/>
            </div>
            
            {/* <Button  title='Create account' type="submit"  Onclick={handleSubmit} /> */}
            <Button type='submit' isLoading={isLoading}>
                Create account
            </Button>
        </form>
    );
};  