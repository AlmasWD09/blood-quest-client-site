import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import DonorRow from "../donorRow/DonorRow";
import useRecentDonorRequest from "../../../../hooks/useRecentDonorRequest";


const DonorHome = () => {
    const { user } = useAuth()
    const navigate = useNavigate();
    const[recentDonorRequestes,refetch] = useRecentDonorRequest();

    // navigate by my-donation-request dashboard
    const handleNavigate = () => {
        navigate('/dashboard/my-donation-request')
    }
    return (
        <div className="h-screen">
            <div className="text-center mt-10">
                <h1 className="text-5xl font-semibold text-green-500">Hellow <span className="uppercase">{user.displayName}</span> Wellcome!!</h1>
                <p className="text-xl font-semibold text-green-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatibus exercitationem voluptates.</p>
            </div>
            {/* donation request table */}
            <div className={`${recentDonorRequestes?.length === 0 && 'hidden'}`}>
            <div className='py-8'>
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
                            {/* dynamic data for donor row */}
                            <tbody>
                                {
                                    recentDonorRequestes.map((category, idx) => <tr key={idx}>
                                        <DonorRow category={category} refetch={refetch}/>

                                    </tr>)}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={handleNavigate}
                    className='px-5 py-5 border-b border-gray-200 bg-secondery text-sm text-white rounded-md'>View All Request</button>
            </div>
            </div>
           
        </div>
    );
};

export default DonorHome;