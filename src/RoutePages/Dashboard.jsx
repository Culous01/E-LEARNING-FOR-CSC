import React, { useState, useEffect} from 'react';
import MaterialsCard from '../ReusableComponent/MaterialsCard';
import { useNavigate } from 'react-router-dom';
import { Disclosure, Menu } from '@headlessui/react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import CSC121 from '../assets/CSC121.jpg';
import CSC132 from '../assets/CSC132.jpg';
import CSC141 from '../assets/CSC141.jpeg';
import CSC111 from '../assets/CSC111.png';
import CSC151 from '../assets/CSC151.jpg';
import CSC125 from '../assets/CSC125.png';
import CSC155 from '../assets/CSC155.jpg';
import { useAuth } from '../Contexts/AuthContext.jsx';

    const courseArray = [
    { cardImage: CSC121 },
    { cardImage: CSC132 },
    { cardImage: CSC141 },
    { cardImage: CSC111 },
    { cardImage: CSC151 },
    { cardImage: CSC125 },
    { cardImage: CSC155 },
    ];

    // ✅ Dropdown Component
    const EditDropButton = ({ label, options, onSelect }) => {
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
            className="w-full flex items-center justify-between gap-2 border-2 border-[rgb(26,46,86)] py-2 px-4 rounded-xl font-bold text-blue-950 lg:text-xl md:text-xl text-base focus:outline-none"
        >
            <span>{selected}</span>
            {open ?
            <IoMdArrowDropright className="text-[rgb(26,46,86)] lg:text-4xl md:text-3xl text-2xl" /> :
            <IoMdArrowDropdown className="text-blue-950 lg:text-4xl md:text-3xl text-2xl" />}
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

    const Dashboard = () => {
    const navigate = useNavigate();
    const [level, setLevel] = useState('');
    const [semester, setSemester] = useState('');
    const { user, logout } = useAuth(); // ✅ Get logged in user from context
    const [courses, setCourses] = useState([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [displayLevel, setDisplayLevel] = useState(user?.level || "N/A");
    const [displaySemester, setDisplaySemester] = useState(
        user?.semester ? (user.semester === 1 ? "1st" : "2nd") : "N/A"
    );
    

    // Load saved level and semester from localStorage on component mount
    useEffect(() => {
        const savedLevel = localStorage.getItem('userLevel');
        const savedSemester = localStorage.getItem('userSemester');

        if (savedLevel) {
        setDisplayLevel(savedLevel);
        setLevel(parseInt(savedLevel));
        }

        if (savedSemester) {
        const semNum = parseInt(savedSemester);
        setDisplaySemester(semNum === 1 ? "1st" : "2nd");
        setSemester(semNum);
        }
    }, []);

    // Handle save button click
    const handleSave = () => {
        if (level) {
        localStorage.setItem('userLevel', level.toString());
        setDisplayLevel(level.toString());
        }

        if (semester) {
        localStorage.setItem('userSemester', semester.toString());
        setDisplaySemester(semester === 1 ? "1st" : "2nd");
        }

        setOpenEdit(false);
    };


    // useEffect(() => {
    //     if (!user) {
    //     return;
    //     }

    //     const fetchCourses = async () => {
    //     try {
    //         const response = await fetch(
    //         "https://final-year-project-elearing-backend.onrender.com/api/v1/courses/getPdfCourses",
    //         { method: "GET",
    //             credentials: 'include',
    //             headers: { 'Content-Type': 'application/json' },
    //         }
    //         );

    //         const data = await response.json();

    //         if (!Array.isArray(data)) {
    //         throw new Error("Expected an array but got something else");
    //         }

    //         let filtered = data;

    //         // ✅ Only filter if user is not admin
    //         if (user.role !== "admin") {
    //         const currentLevel = localStorage.getItem("userLevel") || user.level;
    //         const currentSemester =
    //             localStorage.getItem("userSemester") || user.semester;

    //         const levelSemesterTag = `${currentLevel}/${currentSemester}`;
    //         filtered = data.filter(
    //             (course) => course.levelSemesterTag === levelSemesterTag
    //         );
    //         }

    //         const trimmedCourses = filtered.map((course) => ({
    //         id: course._id,
    //         courseCode: course.courseCode,
    //         title: course.title,
    //         pdfUrl: course.pdfUrl,
    //         }));

    //         setCourses(trimmedCourses);
    //     } catch (error) {
    //         console.error("Error fetching courses:", error);
    //     }
    //     };

    //     fetchCourses();
    // }, [user, displayLevel, displaySemester]);

    const handleLogout = async () => {
        await logout();
    }

    // ✅ Safely decide the display name
    let displayName = "Guest";
    if (user) {
        if (user.role === "admin") {
        displayName = "Admin";
        } else {
        displayName = user.userName || user.username ;
        }
    }

    return (
        <div className='min-h-screen'>
            <Disclosure as="nav" className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-10">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 right-0 flex items-center lg:pr-2  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Menu as="div" className="relative">
                                <div className="flex lg:space-x-3 md:space-x-3 space-x-0">
                                    <MdKeyboardArrowLeft
                                        className='bg-blue-950 text-amber-400 rounded-xl text-4xl cursor-pointer'
                                        onClick={() => { navigate(-1) }}
                                    />
                                </div>
                            </Menu>
                        </div>

                        <div className="flex shrink-0 items-center space-x-4">
                            <a href="/Home" className='lg:text-2xl md:text-2xl text-xl text-blue-950 font-bold'>LOGO</a>
                            <button
                                onClick={handleLogout}
                                className="bg-blue-950 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </Disclosure>

        <div className="w-full flex justify-center mt-10">
            <div className="w-5xl px-5 flex flex-col lg:space-y-28 space-y-14 mb-40">
            <div className='flex flex-col justify-center space-y-10'>
                <div className='flex items-center justify-center gap-5'>
                <FaRegUser className="font-light text-amber-400 lg:text-4xl md:text-3xl text-2xl transform " />
                <h1 className='font-Playfair font-medium lg:text-3xl'>Hello, {displayName}</h1>
                </div>

                <div className='flex justify-between items-center bg-[rgb(26,46,86)] lg:py-5 lg:px-10 py-3 px-7 rounded-xl'>
                <p className='lg:text-3xl md:text-2xl text-xs font-bold text-white'>Level : {displayLevel}</p>
                <p className='lg:text-3xl md:text-2xl text-xs font-bold text-white'>Semester : {displaySemester}</p>

                <div className='relative'>
                    <MdOutlineModeEdit onClick={() => setOpenEdit(!openEdit)} className='text-[rgb(255,199,39)] lg:text-3xl text-2xl cursor-pointer' />

                    {openEdit && (
                    <div className="absolute flex flex-col lg:min-w-xs md:min-w-xs min-w-70 lg:top-12 md:top-10 top-8 -right-7 bg-white py-10 px-7 space-y-10  rounded-xl shadow-2xl">
                        <div className='flex flex-col space-y-7'>
                        <div className='flex flex-col gap-1'>
                            <p className='lg:text-xl text-base text-[rgb(26,46,86)] font-normal'>Level:</p>
                            <EditDropButton options={[100, 200, 300, 400]} onSelect={setLevel} />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <p className='lg:text-xl text-base text-[rgb(26,46,86)] font-normal'>Semester:</p>
                            <EditDropButton options={[1, 2]} onSelect={setSemester} />
                        </div>
                        </div>

                        <div className='flex justify-end'>
                        <button onClick={handleSave} className='bg-[rgb(26,46,86)] text-[rgb(255,199,39)] font-bold px-10 py-3 rounded-xl'>Save</button>
                        </div>
                    </div>
                    )}
                </div>
                </div>
            </div>

            <div className='grid grid-cols-2 justify-center lg:gap-10 gap-6'>
                                
                {courses.length > 0 ? (
                courses.map((course, index) => (
                    <MaterialsCard
                    key={course.id || index}
                    cardImage={courseArray[index % courseArray.length]?.cardImage}
                    courseId={course._id}
                    courseCode={course.courseCode}
                    title={course.title}
                    pdfUrl={course.pdfUrl}
                    />
                ))
                ) : (
                <p className="text-gray-500 text-center">No courses available</p>
                )}
            </div>
            </div>
        </div>
        </div>
    )
}

export default Dashboard;
