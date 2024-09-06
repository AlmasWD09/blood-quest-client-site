import { useState } from "react";
import FundModal from "../../components/modal/fundModal/FundModal";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import FundingRow from "../fundingRow/FundingRow";
import Container from "../../components/shared/Container";



const Fundings = () => {
    const [isOpen, setIsOpen] = useState(false)
const axiosSecure = useAxiosSecure();


    // open for modal
    const handleOpenModal = () => {
        setIsOpen(true)
    }

    // close for modal
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const { data: allFundData = [],refetch } = useQuery({
        queryKey: ['all-fund-data'],
        queryFn: async () => {
            const { data } = await axiosSecure('/all/fundData/related/api/get');
            return data;
        }
    });

    return (
       <>
       <Container>
       <div>
            <h1 className="text-xl md:text-2xl text-secondery font-bold text-center py-5 md:py-5 uppercase">Blood Donation Fund</h1>
            <div className="flex justify-center">
                <button
                onClick={handleOpenModal}
                className="border-2 border-primary p-2 rounded-md font-bold">Give Funding</button>
                <FundModal isOpen={isOpen} onClose={handleCloseModal} setIsOpen={setIsOpen} refetch={refetch}/>
            </div>
             {/* funding table here... */}
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
                                                Name
                                            </th>
                                            <th
                                                scope='col'
                                                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                            >
                                                Email
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
                                                Amount
                                            </th>
                                           
                                        </tr>
                                    </thead>
                                    {/* dynamic data for......... */}
                                    <tbody>
                                        {
                                            allFundData.map((category, idx) => <tr key={idx}>
                                                <FundingRow category={category} serial={idx + 1} />
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

export default Fundings;