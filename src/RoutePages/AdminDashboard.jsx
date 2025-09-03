import React, { useState } from "react";
import { NavBars } from "../ReusableComponent/Navbar";
import { ManagePDF } from "../ReusableComponent/ManagePDF";
import { ManagePastQuestions } from "../ReusableComponent/ManagePastQuestions";
import { ManageQuiz } from "../ReusableComponent/ManageQuiz";

const AdminDashboard = () => {
    const [activePage, setActivePage] = useState("managePDF");

    const renderPage = () => {
        switch (activePage) {
            case "managePDF":
                return <ManagePDF />;
            case "managePastQuestions":
                return <ManagePastQuestions />;
            case "manageQuiz":
                return <ManageQuiz />;
            default:
                return <ManagePDF />;
        }
    };

    return (
        <div>
            <NavBars/>
            
            <div className="flex flex-col lg:px-10 md:px-10 px-5 mx-auto max-w-4xl mt-5">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-[rgba(26,46,86,1)]">Admin Dashboard</h1>

                <div className="flex justify-between gap-1 mt-10">
                    <a
                        className={`lg:text-xl md:text-xl text-xs text-center cursor-pointer ${activePage === "managePDF" ? "text-[rgba(0,0,0,1)] font-Poppins underline" : ""}`}
                        onClick={() => setActivePage("managePDF")}
                    >
                        Manage PDFs
                    </a>
                    <a
                        className={`lg:text-xl md:text-xl text-xs text-center cursor-pointer ${activePage === "managePastQuestions" ? "text-[rgba(0,0,0,1)] font-Poppins underline" : ""}`}
                        onClick={() => setActivePage("managePastQuestions")}
                    >
                        Manage Past Questions
                    </a>
                    <a
                        className={`lg:text-xl md:text-xl text-xs text-center cursor-pointer ${activePage === "manageQuiz" ? "text-[rgba(0,0,0,1)] font-Poppins underline" : ""}`}
                        onClick={() => setActivePage("manageQuiz")}
                    >
                        Manage Quiz
                    </a>
                </div>

                <div className="">
                    {renderPage()}
                </div>
            </div>

            
        </div>
    )
}

export default AdminDashboard