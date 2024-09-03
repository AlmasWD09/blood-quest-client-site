import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";
import PropTypes from 'prop-types';
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";



const VolunteerRow = ({ category,serial,refetch}) => {
  const {_id, upazila, status, requesterName, requesterEmail, recipientName, hospitalName, fullAddress, donationTime, donationDate, district, description, bloodGroup } = category || {}

  const axiosSecure = useAxiosSecure();




// user status change
const handleChangeStatus = async (userStatusChange, id) => {

  const response = await axiosSecure.patch(`/status/change/related/api/${id}`, { status: userStatusChange });
  if (response.data.modifiedCount > 0) {
      toast.success("user status change successfully")
      refetch()
  }
}

  return (
    <>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {serial}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {recipientName}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {district},{upazila}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {
          status === 'inprogress' ? <span className="text-primary font-bold">{requesterEmail}</span> : ''
        }
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {donationDate}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {donationTime}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {status}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <select
           onChange={(e) => handleChangeStatus((e.target.value), _id)}
          defaultValue={'change_status'}
          className="select select-info w-fit h-8 min-h-8 border-2 border-primary font-bold text-slate-800 px-3 py-1 rounded-md"
        >
          <option disabled value="change_status">Change Status</option>
          <option value="pending">pending</option>
          <option value="inprogress">inprogress</option>
          <option value="complete">complete</option>
        </select>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-not-allowed'>
        <FiEdit
          className='text-iconEdditColor text-3xl ' />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-not-allowed'>
        <TbTrashXFilled
          className='text-iconDelettColor text-3xl ' />
      </td>
    </>
  );
};
// props-type validation
VolunteerRow.propTypes = {
  category: PropTypes.object,
  serial: PropTypes.number,


};
export default VolunteerRow;