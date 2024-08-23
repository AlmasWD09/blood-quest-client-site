import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";

const VolunteerRow = ({ category, serial }) => {
  const { upazila, status, requesterName, requesterEmail, recipientName, hospitalName, fullAddress, donationTime, donationDate, district, description, bloodGroup } = category || {}
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
        {requesterEmail}
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

          defaultValue={'change_status'}
          className="select select-info w-fit h-8 min-h-8 border-2 border-primary font-bold text-slate-800 px-3 py-1 rounded-md"
        >
          <option disabled value="change_status">Change Status</option>
          <option value="donor">Donor</option>
          <option value="volunteer">Volunteer</option>
          <option value="admin">Admin</option>
        </select>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <FiEdit
          // onClick={() => handleEddit(_id)}
          className='text-iconEdditColor text-3xl cursor-pointer' />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <TbTrashXFilled
          // onClick={() => handleDelete(_id)}
          className='text-iconDelettColor text-3xl cursor-pointer' />
      </td>
    </>
  );
};

export default VolunteerRow;