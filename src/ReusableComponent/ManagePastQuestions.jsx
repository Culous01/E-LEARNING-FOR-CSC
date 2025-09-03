import { useState } from 'react';
import { ManagePastQuestionsCard } from '../ReusableComponent/ManagePastQuestionsCard'
import { FaPlus } from "react-icons/fa6";
import { IoMdImage } from "react-icons/io";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

export const ImageUploader = ({onFileSelect, label}) => {
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
        setPreview(URL.createObjectURL(file));
        onFileSelect(file);
        } else {
        alert("Please select a valid PDF file");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-10 mt-5 w-full cursor-pointer hover:border-blue-500"
        onClick={() => document.getElementById("ImageInput").click()}
        >
        <IoMdImage className="text-5xl text-gray-500 mb-3" />
        {preview ? (
            <img
            src={preview}
            alt="label"
            className="w-24 h-24 object-cover mb-3 rounded-md"
            />
        ) : (
            <>
                <p className="font-semibold text-gray-700">{label}</p>
                <p className="text-sm text-gray-500">Tap to browse files</p>
            </>
        )}

        {/* Hidden input */}
        <input
            id={label}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
        />
        </div>
    );
};

    // Dropdown Component
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

export const ManagePastQuestions = () => {
    const [pastQuestions, setPastQuestions] = useState([]);
    const [openEdit, setOpenEdit] = useState(false);
    const [courseTitle, setCourseTitle] = useState('');
    const [level, setLevel] = useState('');
    const [semester, setSemester] = useState('');
    const [preview, setPreview] = useState(null);
    const [selectCoverImage, setSelectCoverImage] = useState(null)

            // Cancel → close & reset form
    const handleCancel = () => {
        setCourseTitle('');
        setLevel('');
        setSemester('');
        setPreview(null);
        setSelectCoverImage(null);
        setOpenEdit(false);
    };
    
    // Handle save button click
    const handleSave = () => {
        setOpenEdit(false);
    };

    return (
        <div className='w-full flex flex-col space-y-6 lg:p-8 md:p-8 p-4 rounded-3xl shadow-lg/20 my-10 shrink-0'>
            <h1 className='text-[rgba(26,46,86,1)] font-bold lg:text-4xl md:text-3xl text-2xl'>Manage past questions</h1>

            <div className="relative w-full flex space-x-4">
                <button onClick={() => setOpenEdit(!openEdit)} className="flex items-center gap-1 lg:px-8 md:px-8 px-5  py-3 lg:text-base md:text-base text-xs bg-[rgba(26,46,86,1)] text-[rgb(255,199,39)] font-bold rounded-xl"><FaPlus />Add Image</button>
                
                {openEdit && (
                    <div className="absolute lg:w-full md:w-full w-full top-10 bg-white p-5 rounded-md shadow-lg/20 z-10 flex flex-col">
                        <h1 className='text-[rgba(26,46,86,1)] font-bold lg:text-2xl md:text-2xl text-xl'>Add Image</h1>

                        <div className='w-full h-0.5 mt-3 bg-[rgba(26,46,86,1)]'></div>

                        <div className='mt-10 flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                                <p className='lg:text-xl text-base text-[rgb(26,46,86)] font-semibold'>Course Title:</p>
                                <input
                                    type="text"
                                    id="courseTitle"
                                    name="courseTitle"
                                    value={courseTitle}
                                    onChange={(e) => setCourseTitle(e.target.value)}
                                    autoComplete="off"
                                    className='w-full flex items-center justify-between gap-2 border-2 border-[rgb(26,46,86)] py-2 px-4 rounded-xl font-bold text-blue-950 lg:text-xl md:text-xl text-base focus:outline-none'
                                />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='lg:text-xl text-base text-[rgb(26,46,86)] font-semibold'>Level:</p>
                                <EditDropButton options={[100, 200, 300, 400]} onSelect={setLevel} />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='lg:text-xl text-base text-[rgb(26,46,86)] font-semibold'>Semester:</p>
                                <EditDropButton options={[1, 2]} onSelect={setSemester} />
                            </div>

                            <div>
                                <ImageUploader 
                                select="Select Cover Image"
                                onFileSelect={setSelectCoverImage}
                                />
                            </div>
                            
                            <div>
                                <ImageUploader 
                                select="Select Image"
                                onFileSelect={setPreview}
                                />
                            </div>

                            <div className='flex w-full space-x-4 mt-10'>
                                <button onClick={handleCancel} className='w-full bg-red-500 text-white font-bold py-2 rounded-xl'>Cancel</button>
                                <button onClick={handleSave} className='w-full bg-[rgb(26,46,86)] text-[rgb(255,199,39)] font-bold py-2 rounded-xl'>Save</button>
                            </div>                        
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-center mb-10">
                    {pastQuestions.length > 0 ? (
                        pastQuestions.map((item, index) => (
                        <ManagePastQuestionsCard
                        key={item.id || index}   
                        courseTitle={item.courseTitle}
                        level={item.level}
                        semester={item.semester}
                        onDelete={() => handleDelete(item.id || index)}
                    />))) : (
                                <div className="flex justify-center items-center h-64">
                                    <p className="text-gray-500 text-lg">No Past Questions is available</p>
                                </div>
                            )}
            </div>
        </div>
    )
}
