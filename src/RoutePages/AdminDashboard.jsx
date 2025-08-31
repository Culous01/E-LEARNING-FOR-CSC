import { NavBars } from "../ReusableComponent/Navbar";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div>
            <NavBars/>
            
            
            <h1 className="lg:text-4xl md:text-3xl text-2xl px-5 md:px-10 lg:px-10 mt-10 font-bold text-[rgba(26,46,86,1)]">Admin Dashboard</h1>

            <div className="flex justify-between space-x-10 mt-10 px-5 md:px-10 lg:px-10">
                <Link className="text-[rgba(0,0,0,1)] text-base">Manage PDFs</Link>
                <Link className="text-[rgba(0,0,0,1)] text-base">Manage past questions</Link>
                <Link className="text-[rgba(0,0,0,1)] text-base">Manage quiz</Link>
            </div>
        </div>
    )
}

export default AdminDashboard