import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const DonationRequestRow = ({ category,serial }) => {
    const {_id,recipientName,district,upazila,donationDate,donationTime} = category || {};
  

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

// view details for...
const handleViewDetails = (id) =>{
   navigate (`/donation-request-view-details/${id}`)
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
                {upazila}, {district}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            {donationDate}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            {convertTime}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <button 
            onClick={()=>handleViewDetails(_id)}
            className="border-2 border-primary p-2 rounded-md font-bold">View Details</button>
            </td>
        </>
    );
};
// props-type validation
DonationRequestRow.propTypes = {
    category: PropTypes.object,
    serial: PropTypes.number,
};
export default DonationRequestRow;