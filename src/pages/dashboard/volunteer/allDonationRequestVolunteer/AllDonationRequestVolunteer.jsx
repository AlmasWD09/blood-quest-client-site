import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import EmptyPage from "../../Donor/emptyPage/EmptyPage";
import VolunteerRow from "../volunteerRow/VolunteerRow";


const AllDonationRequestVolunteer = () => {
    const axiosSecure = useAxiosSecure();
    const { data: alldonationRequestes = [] } = useQuery({
        queryKey: ['all-donation-request'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allBlood/donation/request/volunteer/api/get');
            return res.data;
        }
    })
    return (
        <>
            <div className="text-center mt-10">
                <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">All Donation Request</h1>
            </div>
            {/* donation request table */}
            <div className=''>
                {
                    alldonationRequestes.length === 0 ? (
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
                                        Location
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                         Time
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                         Date
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
                                        Information
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
                                    alldonationRequestes.map((category, idx) => <tr key={idx}>
                                        <VolunteerRow category={category}  serial ={idx+1}/>

                                    </tr>)
                                    
                                    }
                            </tbody>

                        </table>
                    </div>
                </div>
                }
              
            </div>
        </>
    );
};

export default AllDonationRequestVolunteer;