import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SearchRow = ({ category, serial }) => {
    const { _id, recipientName, district, upazila, donationDate, donationTime, } = category || {};
    const navigate = useNavigate();


    // view details for...
    const handleViewDetails = (id) => {
        navigate(`/search-view-details/${id}`)
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
                {district}, {upazila}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {donationDate}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {donationTime}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    onClick={() => handleViewDetails(_id)}
                    className="border-2 border-primary p-2 rounded-md font-bold">View Details</button>
            </td>
        </>
    );
};
// props-type validation
SearchRow.propTypes = {
    category: PropTypes.object,
    serial: PropTypes.number,
};
export default SearchRow;