import React, { useState, useEffect} from 'react';
import { NavBars } from '../ReusableComponent/Navbar';
import MaterialsCard from '../ReusableComponent/MaterialsCard';
// import { useNavigate, useSearchParams } from 'react-router-dom';
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
import { useAuth } from '../Contexts/AuthContext';

    const courseImgArray = [
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
    const [level, setLevel] = useState('');
    const [semester, setSemester] = useState('');
    const { user, courses, updateProfile } = useAuth(); // Get logged in user from context
    const [openEdit, setOpenEdit] = useState(false);
    const [displayLevel, setDisplayLevel] = useState(user?.level || "N/A");
    const [displaySemester, setDisplaySemester] = useState(
        user?.semester ? (user.semester === 1 ? "1st" : "2nd") : "N/A"
    );

    // Handle save button click
    const handleSave = () => {
        if (level) {
            setDisplayLevel(level.toString());
        }

        if (semester) {
            setDisplaySemester(semester === 1 ? "1st" : "2nd");
        }
        setOpenEdit(false);
        const updatedData = {
            level: level,
            semester: semester,
            levelSemesterTag: `${level}/${semester}`
        };
        updateProfile(updatedData);
    };

    // ✅ Safely decide the display name
    let displayName = "Guest";
    if (user) {
        if (user.role === "admin") {
        displayName = user.userName;
        } else {
        displayName = user.userName ;
        }
    }
    console.log(`course from dashboard: ${courses}`);

    
    return (
        <div className='min-h-screen'>
            <NavBars />

            <div className="w-full flex justify-center mt-5">
                <div className="w-5xl flex lg:px-10 md:px-10 px-5 flex-col lg:space-y-28 space-y-14">
                    <div className='flex flex-col justify-center space-y-5'>
                        <div className='flex items-center justify-center gap-2'>
                            <FaRegUser className="font-light text-amber-400 lg:text-4xl md:text-3xl text-2xl transform " />
                            <h1 className='font-Playfair font-medium lg:text-3xl'>Hello, {displayName}</h1>
                        </div>

                        <div className='flex justify-between items-center bg-[rgb(26,46,86)] lg:py-5 lg:px-14 md:px-14 px-7 py-3 rounded-xl border-2 border-white shadow-lg'>
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
                </div>
            </div>

            {courses.length > 0 ? (<div className='grid grid-cols-2 mx-auto max-w-7xl lg:px-10 md:px-10 px-5 justify-center lg:gap-10 gap-6 my-14'>                    
                {courses.map((course, index) => (
                    <MaterialsCard
                    key={ index}
                    cardImage={courseImgArray[index % courseImgArray.length]?.cardImage}
                    courseCode={course.courseCode}
                    title={course.title}
                    pdfUrl={course.pdfUrl}
                    />
                ))}
                </div>) : (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-gray-500 text-lg">No courses available</p>
                    </div>
                )}
        </div>
    )
}

export default Dashboard;