import { useQuery } from "@tanstack/react-query";
import DonorRow from "../donorRow/DonorRow";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import EmptyPage from "../emptyPage/EmptyPage";
import LoadindSpenier from "../../../../components/LoadindSpenier";


const MyDonationRequest = () => {
    const { user,loading  } = useAuth()
    const axiosSecure = useAxiosSecure();
  const [filterValue,setFilterValue] = useState('');




    // get date by mongodb in transStack query
    const { data: alldonorRequestes = [], refetch,isPending } = useQuery({
        queryKey: ['all-donor-request', user?.email,filterValue],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allDonor/donation/request/api/get/${user.email}?filterQuery=${filterValue}`);
            return res.data;
        }
    })
 

    const handleClick = (value) =>{
        setFilterValue(value)
    }
    if(loading || isPending) return <LoadindSpenier />
    return (
        <>
            <div className="text-center mt-10">
                <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">My Donation Request</h1>
                <div className="flex justify-center gap-4 pt-8">
                  <div className="flex flex-col md:flex-row  gap-4">
                  <button onClick={() => handleClick('pending')} className="bg-gray-200 px-6 py-1 rounded">Pending</button>
                  <button onClick={() => handleClick('inProgress')} className="bg-gray-200 px-6 py-1 rounded">Inprogress</button>
                  </div>
                  <div className="flex flex-col md:flex-row  gap-4">
                  <button onClick={() => handleClick('done')} className="bg-gray-200 px-6 py-1 rounded">Done</button>
                  <button onClick={() => handleClick('canceled')} className="bg-gray-200 px-6 py-1 rounded">Canceled</button>
                  </div>
                </div>
            </div>
            {/* donation request table */}
            <div className=''>
                {
                    alldonorRequestes.length === 0 ? (
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
                                    alldonorRequestes.map((category, idx) => <tr key={idx}>
                                        <DonorRow category={category} refetch={refetch} serial ={idx+1}/>

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

export default MyDonationRequest;