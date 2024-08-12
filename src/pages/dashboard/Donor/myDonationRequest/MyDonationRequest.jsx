import useDonorRequestes from "../../../../hooks/useDonorRequestes";
import DonorRow from "../donorRow/DonorRow";


const MyDonationRequest = () => {
    const [donorRequestes] = useDonorRequestes();
    return (
        <>
            <div className="text-center mt-10">
                <h1 className="text-5xl font-semibold text-green-500">My Donation Request</h1>
                <div className="flex justify-center gap-4 pt-8">
                    <button className="bg-gray-200 px-6 py-1 rounded">Pending</button>
                    <button className="bg-gray-200 px-6 py-1 rounded">Inprogress</button>
                    <button className="bg-gray-200 px-6 py-1 rounded">Done</button>
                    <button className="bg-gray-200 px-6 py-1 rounded">Canceled</button>
                </div>
            </div>
            {/* donation request table */}
            <div className=''>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Recipient Name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        District
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Upazila
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Donation Date
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Donation Time
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Details
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            {/* dynamic data for......... */}
                            <tbody>
                                {
                                    donorRequestes.map((category, idx) => <tr key={idx}>
                                        <DonorRow category={category} />

                                    </tr>)}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyDonationRequest;