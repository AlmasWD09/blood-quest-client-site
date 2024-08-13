import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { TbTrashXFilled } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';


const DonorRow = ({ category, refetch }) => {
    const { _id, recipientName, district, upazila, donationDate, donationTime, status, } = category || {};
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    // time convert 24 hour to 12 hour
    const hourConvert = (time24) => {
        // At first split the time into hour & munite and convert in number
        const [hour24, munite] = time24.split(':').map(Number);

        // Get am & pm period
        const period = hour24 >= 12 ? 'PM' : 'AM';

        // Convert 24 hour into 12 hour
        const hour12 = hour24 % 12 || 12;

        // Ensures munite are two digit and 0 will be added for before 1 character value
        const paddedMunite = munite.toString().padStart(2, '0');

        // Format the hour, time and period
        const time12 = `${hour12}:${paddedMunite} ${period}`;

        // Finally return the 12 hour time
        return time12;
    };
    const convertTime = hourConvert(donationTime);

    // Eddit for data by mongoDB
    const handleEddit = async (id) => {
        const { res } = await axiosSecure.get(`/donor/donation/request/api/get/${id}`)
        console.log(res);
        navigate(`/dashboard/my-donation-eddit/${id}`)
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
                const response = await axiosSecure.delete(`/donor/donation/request/api/delete/${id}`);
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

                {recipientName}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {district}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {upazila}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {donationDate}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {convertTime}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {status}
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
DonorRow.propTypes = {
    category: PropTypes.object,
    refetch: PropTypes.func,
};
export default DonorRow;