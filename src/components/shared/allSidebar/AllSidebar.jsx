import { FaHome } from "react-icons/fa";
import { VscGitPullRequestGoToChanges, VscGitPullRequestNewChanges } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import useRole from "../../../hooks/useRole";


const AllSidebar = () => {
    const [role] = useRole();


    return (
        <>
            <div>
                {role === 'donor' && (
                    <div className="flex flex-col gap-2">
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/donor-home'><FaHome className="mr-2" />Donor Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/my-donation-request'><VscGitPullRequestGoToChanges className="mr-2" />My Donation Request</NavLink>
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/create-donation-request'><VscGitPullRequestNewChanges className="mr-2" />Create Donation Request</NavLink>
                    </div>
                )}

                {role === 'volunteer' && (
                    <div className="flex flex-col gap-2">
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/volunteer-home'><FaHome className="mr-2" />Volunteer Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/all-blood-donation-request-volunteer'>All Blood Donation Request</NavLink>
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/content-management-volunteer'>Content Management</NavLink>
                    </div>
                )}

                {role === 'admin' && (
                    <div className="flex flex-col gap-2">
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/admin-home'><FaHome className="mr-2" />Admin Home</NavLink>
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/all-users'>All Users</NavLink>
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/all-blood-donation-admin'>All Blood Donation Request</NavLink>
                    
                        <NavLink className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                            }`
                        } to='/dashboard/content-management-admin'>Content Management</NavLink>
                    </div>
                )}
            </div>
        </>
    );
};

export default AllSidebar;