import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Disclosure} from '@headlessui/react'
import Logo from '../assets/Logo.png'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from '../Contexts/AuthContext';


export const Navbar = () => {
    return (
        <Disclosure
        as="nav"
        className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10">
                <div className=" flex shrink-0 h-24  items-center">                
                    <img
                        alt="ByteClass"
                        src={Logo}
                        className="lg:h-15 md:h-13 h-12 w-auto"
                    />
                </div>
            </div>

        </Disclosure>
    )
}


export const NavBars = () => {
    const navigate = useNavigate();
    const { user,logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    }
    
    return (
            <Disclosure as="nav" className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10">
                    <div className="relative flex h-24 items-center justify-between">
                        {/* <MdKeyboardArrowLeft
                            className='bg-blue-950 text-amber-400 rounded-xl text-4xl cursor-pointer'
                            onClick={() => { navigate(-1) }}
                        /> */}
                        <img
                            alt="ByteClass"
                            src={Logo}
                            className="lg:h-15 md:h-13 h-12 w-auto -mr-5"
                        />
                    
                        {user?.role === "admin" && (
                            <Link to="/adminDashboard" className="absolute -translate-x-1/2 top-1/2  left-1/2 underline font-bold -mt-10 text-[rgb(26,46,86)] text-center">
                                Admin
                            </Link>
                        )}


                        {/* <div className='flex space-x-4 items-center'> */}
                            {user ?    <button
                                onClick={handleLogout}
                                className="bg-red-600 text-white px-4 lg:py-2 py-1 rounded-lg font-bold hover:bg-blue-400 transition"
                                >
                                <IoIosLogOut />
                            </button> : <p></p>}

                        {/* </div> */}
                    </div>
                </div>
            </Disclosure>
    )   
}
