import PropTypes from 'prop-types';

const AllUserRow = ({ singleUser}) => {
    const { image, email, name, role, status, } = singleUser || {};

    
    return (
        <>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <img className='w-16 h-16 rounded-lg' src={image} alt="" />
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
            <td className=' px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <p>{status}</p>
                    <p className={` w-2 h-2 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></p>
                </div>
            </td>
         
            <td>
                <select
                    // name="activity"
                    // id="activity"
                    // disabled={isDisable === email ? true : false}
                    // onChange={handleActivity}
                    defaultValue={'change_status'}
                    className="select select-info w-fit h-8 min-h-8 border border-secondery font-bold text-slate-500 px-3 py-1 rounded-md"
                >
                    <option disabled value="change_status" >Status Change</option>
                    <option value="block">Block</option>
                    <option value="unblock">Unblock</option>
                </select>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <select
                    // name="activity"
                    // id="activity"
                    // disabled={isDisable === email ? true : false}
                    // onChange={handleRole}
                    defaultValue={'change_role'}
                    className="select select-info w-fit h-8 min-h-8 border-2 border-primary font-bold text-slate-800 px-3 py-1 rounded-md"
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
};
export default AllUserRow;