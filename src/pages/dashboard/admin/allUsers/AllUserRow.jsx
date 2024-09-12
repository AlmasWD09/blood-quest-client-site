import PropTypes from 'prop-types';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAuth from '../../../../hooks/useAuth';
// import { useState } from 'react';



const AllUserRow = ({ singleUser, refetch }) => {
    const { user } = useAuth();
    // const [statusValue, setStatusValue] = useState(singleUser.status);
    const axiosSecure = useAxiosSecure();
    const { image, email, name, role, status, } = singleUser || {};

    // user status change
    const handleChangeStatus = async (userStatusChange, email) => {

        const res = await axiosSecure.patch(`/user/status/change/api/${email}`, { status: userStatusChange });
        if (res.data.modifiedCount > 0) {
            toast.success("User status change successfully")
            refetch()
        }
    }




    // user role change
    const handleChangeRole = async (userRoleChange, email) => {

        const response = await axiosSecure.patch(`/user/role/change/api/${email}`, { role: userRoleChange });
        if (response.data.modifiedCount > 0) {
            toast.success("user role change successfully")
            refetch()
        }
    }


    return (
        <>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <img className='w-10 h-10 lg:w-16 lg:h-16 rounded-lg' src={image} alt="" />
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {email}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {name}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {role}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <p>{status}</p>
                    <p className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></p>
                </div>
            </td>


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <select
                    disabled={user?.email === email}
                    onChange={(e) => handleChangeStatus((e.target.value), email)}
                    defaultValue={'change_status'}
                    className={`disabled:bg-grey-100 disabled:text-gray-400 disabled:border-none disabled:cursor-not-allowed :'select select-info w-fit h-8 min-h-8 border-2 border-primary font-bold text-slate-800 px-3 py-1 rounded-md'`}>

                    <option disabled value="change_status">Status Change</option>
                    <option value="block">Block</option>
                    <option value="unblock">Unblock</option>
                </select>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <select
                    disabled={user?.email === email}
                    onChange={(e) => handleChangeRole((e.target.value), email)}
                    defaultValue={'change_role'}
                    className={`disabled:bg-grey-100 disabled:text-gray-400 disabled:border-none disabled:cursor-not-allowed :'select select-info w-fit h-8 min-h-8 border-2 border-primary font-bold text-slate-800 px-3 py-1 rounded-md'`}
                >
                    <option disabled value="change_role">Role Change</option>
                    <option value="donor">Donor</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="admin">Admin</option>
                </select>
            </td>

        </>
    );
};
// props-type validation
AllUserRow.propTypes = {
    singleUser: PropTypes.object,
    refetch: PropTypes.func,
};
export default AllUserRow;