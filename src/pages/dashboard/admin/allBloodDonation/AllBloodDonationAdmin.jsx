import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import EmptyPage from "../../Donor/emptyPage/EmptyPage";
import AdminRow from "../adminRow/AdminRow";


const AllBloodDonationAdmin = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data: allDonationData = [],refetch} = useQuery({
        queryKey: ['all-donor-request-data', ],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-donation-request/api/get');
            return res.data;
        }
    })

    return (
        <div className="mt-20 lg:mt-0">
            <h1 className="text-lg sm:text-xl md:text-2xl text-secondery font-bold text-center py-5 md:py-5 uppercase ">all blood donation request</h1>

            <div className='overflow-hidden '>
                {
                    allDonationData.length === 0 ? (
                      <EmptyPage />
                    ) 
                    :
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                            SERIAL NO.
                                        </th>
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
                                        Change Status
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
                            {/* dynamic data for donor row */}
                            <tbody>
                                {
                                    allDonationData.map((category, idx) => <tr key={idx}>
                                        <AdminRow category={category} refetch={refetch} serial ={idx+1}/>

                                    </tr>)
                                    
                                    }
                            </tbody>

                        </table>
                    </div>
                </div>
                }
              
            </div>
        </div>
    );
};

export default AllBloodDonationAdmin;