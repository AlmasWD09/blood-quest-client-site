import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import DonorRow from "../donorRow/DonorRow";
import useRecentDonorRequest from "../../../../hooks/useRecentDonorRequest";
import LoadindSpenier from "../../../../components/LoadindSpenier";



const DonorHome = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const [recentDonorRequestes, refetch, isPending] = useRecentDonorRequest();


    // navigate by my-donation-request dashboard
    const handleNavigate = () => {
        navigate('/dashboard/my-donation-request')
    }

    if (loading || isPending) return <LoadindSpenier />
    return (
        <>
            <div className="h-screen">
                <div className="text-center">
                <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">Donor Home</h1>
                </div>
                {/* Conditional rendering based on the length of recentDonorRequestes */}
               
                    <div className=" md:py-8">
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                SERIAL NO.
                                            </th>
                                            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                Recipient Name
                                            </th>
                                            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                District
                                            </th>
                                            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                Upazila
                                            </th>
                                            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                Donation Date
                                            </th>
                                            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                Donation Time
                                            </th>
                                            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                Status
                                            </th>
                                            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                Edit
                                            </th>
                                            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentDonorRequestes.map((category, idx) => (
                                            <tr key={idx}>
                                                <DonorRow category={category} refetch={refetch} serial={idx + 1} />
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
            
                <div className="flex justify-center py-4 md:pb-0">
                    <button
                        onClick={handleNavigate}
                        className=" px-2 py-2 md:px-5 md:py-5 bg-primary bg-secondary text-sm text-white rounded-md"
                    >
                        View All Request
                    </button>
                </div>
            </div>
        </>
    );
};

export default DonorHome;