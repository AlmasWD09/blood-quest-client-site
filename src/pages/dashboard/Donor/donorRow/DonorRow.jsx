import PropTypes from 'prop-types';

const DonorRow = ({category}) => {
    const { recipientName, district, upazila, donationDate, donationTime, status, } = category || {};

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
            <button className="bg-green-500 px-3 py-1 rounded-md">Details</button>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <button className="bg-gray-400 px-3 py-1 rounded-md">Edit</button>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
            <button className="bg-red-500 px-3 py-1 rounded-md">Details</button>
        </td>
    </>
    );
};
// props-type validation
DonorRow.propTypes = {
    category: PropTypes.object,
};
export default DonorRow;