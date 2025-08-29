import React, { useState, useEffect, useRef} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Input } from './Input.jsx'; 
import { Button } from './Button.jsx'; 
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { useAuth } from '../Contexts/AuthContext.jsx';

export const UserIcon = () => {

    return (
        <FaRegUser className="absolute left-10 font-light text-amber-400 text-3xl top-1/2 transform -translate-y-1/2" />
    )
}

export const EmailIcon = () => {
    return (
        <AiOutlineMail className="absolute left-10 text-amber-400 text-3xl top-1/2 transform -translate-y-1/2" />
    )
}

// ✅ Dropdown Component
const DropdownButton = ({ label, options, onSelect }) => {
const [selected, setSelected] = useState(label);
const [open, setOpen] = useState(false);

const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    if (onSelect) {
        onSelect(option);
    }
};

return (
    <div className="w-full relative inline-block text-left">
    <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center gap-2 border-1 border-[rgb(26,46,86)] p-2 rounded-full font-bold text-blue-950 lg:text-xl md:text-xl text-base focus:outline-none"
    >
        <span>{selected}</span>
        {open ? 
            <IoMdArrowDropright className="text-[rgb(26,46,86)] lg:text-4xl md:text-3xl text-2xl" /> : <IoMdArrowDropdown className="text-blue-950 lg:text-4xl md:text-3xl text-2xl" />}
    </button>

    {open && (
        <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10">
        <ul className="py-1 text-sm">
            {options.map((option) => (
            <li
                key={option}
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

// ✅ Main Signup Form
export default function SignUpForm() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [level, setLevel] = useState('');
    const [semester, setSemester] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { signUp } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

            if (!level || !semester) {
                toast.error("Please select both level and semester.");
                return;
            }

        const levelSemesterTag = `${level}/${semester}`;
        const userData = { 
            userName, 
            email, 
            password,
            level,
            semester,
            levelSemesterTag };
        await signUp(userData, setIsLoading);
    }
    
    return (
        <form onSubmit={handleSubmit} className="lg:space-y-8 md:space-y-7 space-y-6 flex flex-col">

        <div className="w-full relative">
            <UserIcon />
            <Input
            type="text"
            id="username"
            name="username"
            value={userName}
            autoComplete="username"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            required
            />
        </div>

        <div className="w-full relative">
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

        <div className="w-full relative">
            <MdLockOutline className="absolute left-10 text-amber-400 text-3xl top-1/2 transform -translate-y-1/2" />
            <Input
            type="password"
            id="password"
            name="password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            />
        </div>

        <div className="flex gap-10 lg:mt-3 md:mt-3 mt-2">
            <DropdownButton label="Level" options={[100, 200, 300, 400]} onSelect={setLevel} />
            <DropdownButton label="Semester" options={[1, 2]} onSelect={setSemester} />
        </div>

        <Button type="submit" isLoading={isLoading}>
            Create account
        </Button>
        </form>
    );
}