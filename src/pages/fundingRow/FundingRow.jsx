import PropTypes from 'prop-types';

const FundingRow = ({ category, serial }) => {
    const { name, email, date, amount } = category || {}

    const dateString = date;

    // Convert to Date object
    const datee = new Date(dateString);

    // Extract the date part in ISO 8601 format (YYYY-MM-DD)
    const isoDate = datee.toISOString().slice(0, 10);
  
    return (
        <>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {serial}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {name}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {email}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {isoDate}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                {amount}
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

            </td>
        </>
    );
};

// props-type validation
FundingRow.propTypes = {
    category: PropTypes.object,
    serial: PropTypes.number,
};
export default FundingRow;