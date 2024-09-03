import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Container from "../../components/shared/Container";
import DonationRequestRow from "../donationRequestRow/DonationRequestRow";


const DonationRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { data: pendingDonationRequest = [], } = useQuery({
        queryKey: ['donation-redquest',],
        queryFn: async () => {
            const res = await axiosSecure.get('/navbar/blood/donation/request/pending/api/get');
            return res.data;
        }
    })

    return (
        <>
            <Container>
                <div>
                    <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">Blood Donation request</h1>
                    {/* donation table here... */}
                    <div className='py-0'>
                        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                                <table className='min-w-full leading-normal'>
                                    <thead>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Serial No
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Recipent Name
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
                                                Date
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
                                                <button>See Details</button>
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* dynamic data for......... */}
                                    <tbody>
                                        {
                                            pendingDonationRequest.map((category, idx) => <tr key={idx}>
                                                <DonationRequestRow category={category} serial={idx + 1} />
                                            </tr>)}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default DonationRequest;