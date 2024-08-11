import { NavLink } from "react-router-dom";



const Sidebar = () => {
   const role = 'donor'
    return (
        <>
        <div className="bg-gray-100 w-[200px] h-screen px-4">
            {/* admin for dashboard */}
           {role === 'admin'? <div className="flex flex-col gap-2">
            <NavLink className="hover:bg-gray-400 py-2" to='/'>Home</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/admin-home'>Admin Home</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/all-users'>All Users</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/all-blood-donation-request-admin'>All Blood Donation Request</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/content-management-admin'>Content Management</NavLink>
            </div>
            :
            ''
            }

            {/* donor for dashboard */}
           {role === 'donor'? <div className="flex flex-col gap-2">
            <NavLink className="hover:bg-gray-400 py-2" to='/'>Home</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/donor-home'>Donor Home</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/my-donation-request'>My Donation Request</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/create-donation-request'>Create Donation Request</NavLink>
        
            </div>
            :
            ' '
            }

            {/* volunteer for dashboard */}
            {role === 'volunteer'? <div className="flex flex-col gap-2">
            <NavLink className="hover:bg-gray-400 py-2" to='/'>Home</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/volunteer-home'>Volunteer Home</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/all-blood-donation-request-volunteer'>All Blood Donation Request</NavLink>
            <NavLink className="hover:bg-gray-400 py-2" to='/dashboard/content-management-volunteer'>Content Management</NavLink>
        
            </div>
            :
            ' '
            }
        </div>
        </>
    );
};

export default Sidebar;