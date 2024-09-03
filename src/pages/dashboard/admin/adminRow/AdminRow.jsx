import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const AdminRow = ({ category, serial,refetch }) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { _id, upazila, status,requesterEmail, recipientName, donationTime, donationDate, district, } = category || {}

  // user status change
  const handleChangeStatus = async (userStatusChange, id) => {
    const response = await axiosSecure.patch(`/status/change/related/api/${id}`, { status: userStatusChange });
    if (response.data.modifiedCount > 0) {
      toast.success("user status change successfully")
      refetch()
    }
  }

    // navigate by update blood request page
    const handleEddit = (id) => {
      navigate(`/dashboard/blood-donation-request-update-admin/${id}`)
  }

   // Delete for data by mongoDB
   const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: `${recipientName} is deleted to the menu.`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            const response = await axiosSecure.delete(`/blood/donation-request/related/api/delete/${id}`);
            if (response.data.deletedCount > 0) {
                // refetch();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${recipientName} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        }
    });
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
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <FiEdit
        onClick={() => handleEddit(_id)}
          className='text-iconEdditColor text-3xl cursor-pointer' />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <TbTrashXFilled
         onClick={() => handleDelete(_id)}
          className='text-iconDelettColor text-3xl cursor-pointer' />
      </td>
    </>
  );
};

// props-type validation
AdminRow.propTypes = {
  category: PropTypes.object,
  refetch: PropTypes.func,
  serial: PropTypes.number,
};
export default AdminRow;