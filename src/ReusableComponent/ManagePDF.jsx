import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { BiSolidFilePdf } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { useAuth } from '../Contexts/AuthContext';

// PdfUploader Selection
export const PdfUploader = ({onFileSelect, }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "application/pdf") {
        setSelectedFile(file);
        onFileSelect(file);
        } else {
        alert("Please select a valid PDF file");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg p-10 mt-5 w-full cursor-pointer hover:border-blue-500"
        onClick={() => document.getElementById("pdfInput").click()}
        >
        <BiSolidFilePdf className="text-5xl text-gray-500 mb-3" />
        {selectedFile ? (
            <p className="text-center font-semibold text-gray-700">
                {selectedFile.name}
            </p>
        ) : (
            <>
                <p className="font-semibold text-gray-700">Select PDF File</p>
                <p className="text-sm text-gray-500">Tap to browse files</p>
            </>
        )}

        {/* Hidden input */}
        <input
            id="pdfInput"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
        />
        </div>
    );
};

    // ManageQuizArray container
export const ManageQuizArray = ({SelectedPdf, Description, Time, onDelete}) => {
    return (
        <div className="flex space-x-5 items-center p-5 shadow-xs/14 rounded-2xl">
            <div className="flex flex-col space-y-2 w-full">
                <h1 className="lg:text-2xl md:text-xl text-base text-[rgba(26,46,86,1)] font-bold break-words whitespace-normal">
                    {SelectedPdf}
                </h1>

                <p className="lg:text-xl md:text-base text-xs text-[rgba(26,46,86,1] break-words whitespace-normal">
                    {Description}
                </p>
            </div>

            <div className="flex flex-col space-y-2 text-right">
                <p className="text-xs text-[rgba(26,46,86,1)]">{Time}</p>
                <MdDeleteOutline onClick={onDelete} className="text-red-500 text-2xl" />
            </div>
        </div>
    )
}

    // Dropdown Component
    const EditDropButton = ({ label, options, onSelect }) => {
    const [selected, setSelected] = useState(label);
    const [open, setOpen] = useState(false);
    // const [ user ] = useAuth;

        // Handle Add Image button Selection 
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
                    className="w-full flex items-center justify-between gap-2 border-2 border-[rgb(26,46,86)] py-2 px-4 rounded-xl font-bold text-[rgb(26,46,86)] lg:text-xl md:text-xl text-base focus:outline-none"
                >
                    <span>{selected}</span> 
                    {open ?
                    <IoMdArrowDropright className="text-[rgb(26,46,86)] lg:text-4xl md:text-3xl text-2xl" /> :
                    <IoMdArrowDropdown className="text-[rgb(26,46,86)] lg:text-4xl md:text-3xl text-2xl" />}
                </button>

                {open && (
                    <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white z-10">
                        <ul className="py-1 text-sm">
                            {options.map((option) => (
                            <li
                                key={option}
                                onClick={() => handleSelect(option)}
                                className="px-4 py-2 hover:bg-[rgb(26,46,86)] hover:text-white cursor-pointer"
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

    // ManagePDF Container
export const ManagePDF = () => {
    const [managePdf, setManagePdf] = useState([])
    const [openEdit, setOpenEdit] = useState(false);
    const [courseTitle, setCourseTitle] = useState('');
    const [level, setLevel] = useState('');
    const [semester, setSemester] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

        // Handle Delete Pdf
    const handleDelete = (id) => {
        setManagePdf((prev) => prev.filter((item, index) => (item.id || index) !== id));
    };

        // Cancel → close & reset form
    const handleCancel = () => {
        setCourseTitle('');
        setLevel('');
        setSemester('');
        setSelectedFile(null);
        setOpenEdit(false);
    };
    
        // Handle save button click
    const handleSave = async () => {
        try {
            const pdfData = new FormData();
            pdfData.append("courseTitle", courseTitle);
            pdfData.append("level", level);
            pdfData.append("semester", semester);
            pdfData.append("pdf", selectedFile);

            const response = await fetch("", {
            method: "POST",
            body: (pdfData),
                credentials: 'include',
        });

            if (!response.ok) throw new Error("Failed to upload PDF");

            const data = await response.json();
            console.log("Upload successful:", data);

        // setManagePdf((prev) => [
        //     ...prev,
        //     {
        //         id: data.id || Date.now(), // fallback ID if backend doesn’t return one
        //         selectedPdf: courseTitle,
        //         description: `${level} - Semester ${semester}`,
        //         time: new Date().toLocaleString(),
        //     },
        // ]);

        } catch (error) {
            console.error("Error uploading PDF:", error);
        } finally {
            setOpenEdit(false);
        }
    };

    return (
        <div className='w-full flex flex-col space-y-6 lg:p-8 md:p-8 p-4 rounded-2xl shadow-lg/20 my-10 shrink-0'>
            <h1 className='text-[rgba(26,46,86,1)] font-bold lg:text-4xl md:text-3xl text-2xl'>Manage PDFs</h1>

            <div className="relative w-full flex">
                <button onClick={() => setOpenEdit(!openEdit)} className="flex items-center gap-1 lg:px-8 md:px-8 px-5  py-3 lg:text-base md:text-base text-xs bg-[rgba(26,46,86,1)] text-[rgb(255,199,39)] font-bold rounded-xl"><FaPlus />Add PDF</button>

                {openEdit && (
                    <div className="absolute w-full top-10 bg-white p-5 rounded-md shadow-lg/20 z-10 flex flex-col">
                        <h1 className='text-[rgba(26,46,86,1)] font-bold lg:text-2xl md:text-2xl text-xl'>Add new pdf</h1>
                        
                        <div className='w-full h-0.5 mt-3 bg-[rgba(26,46,86,1)]'></div>

                        <div className='mt-10 flex flex-col gap-6'>
                            <div className='flex flex-col gap-1'>
                                <p className='lg:text-xl text-base text-[rgb(26,46,86)] font-semibold'>Course Title:</p>
                                <input
                                    type="text"
                                    id="courseTitle"
                                    name="courseTitle"
                                    value={courseTitle}
                                    onChange={(e) => setCourseTitle(e.target.value)}
                                    autoComplete="off"
                                    className='w-full flex items-center justify-between gap-2 border-2 border-[rgb(26,46,86)] py-2 px-4 rounded-xl font-bold text-[rgb(26,46,86)] lg:text-xl md:text-xl text-base focus:outline-none'
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
                                <PdfUploader onFileSelect={setSelectedFile} />
                            </div>

                            <div className='flex w-full space-x-5 mt-10'>
                                <button onClick={handleCancel} className='w-full bg-red-500 text-white font-bold py-2 rounded-xl'>Cancel</button>
                                <button onClick={handleSave} className='w-full bg-[rgb(26,46,86)] text-[rgb(255,199,39)] font-bold py-2 rounded-xl'>Save</button>
                            </div>                        
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col space-y-8 mb-10">
                {managePdf.length > 0 ? (
                managePdf.map((item, index) => (
                    <ManageQuizArray
                    key={item.id || index}   // use item.id if available, else fallback to index
                    SelectedPdf={item.selectedPdf}
                    Description={item.description}
                    Time={item.time}
                    onDelete={() => handleDelete(item.id || index)}
                    />
                ))
                ) : (
                <div className="flex justify-center items-center h-64">
                    <p className="text-gray-500 text-lg">No PDFs available</p>
                </div>
                )}
            </div>
        </div>
    )
}
