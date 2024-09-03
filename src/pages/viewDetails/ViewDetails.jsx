import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import Container from "../../components/shared/Container";


const ViewDetails = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure();
    const { data: singelRequestData = {},} = useQuery({
        queryKey: ['single-request-data',],
        queryFn: async () => {
            const res = await axiosSecure.get(`/navbar/viewDetails/blood/request/api/${id}`);
            return res.data;
        }
    })
    const { status,requesterName,requesterEmail,recipientName,hospitalName,district,upazila,donationDate,donationTime,fullAddress,bloodGroup,description,} = singelRequestData || {};

    

    return (
        <>
        <Container>
            <div className="max-w-2xl mx-auto">
            <h1 className="bg-green-300 text-xl md:text-2xl text-secondery font-bold text-center py-5 md:py-5 uppercase">Blood Donation request Details</h1>
            <div className="border-2 border-primary space-y-3 p-4 mt-5">
                <h3><span className="text-lg font-bold text-gray-700">Recipient Name: </span>{recipientName}</h3>
                <h3><span className="text-lg font-bold text-gray-700">Blood Group: </span>{bloodGroup}</h3>
                <h3><span className="text-lg font-bold text-gray-700">Location: </span>{upazila}, {district}</h3>
                <h3><span className="text-lg font-bold text-gray-700">Hospital: </span>{hospitalName}</h3>
                <h3><span className="text-lg font-bold text-gray-700">Address: </span>{fullAddress}</h3>
                <h3><span className="text-lg font-bold text-gray-700">Donation Date: </span>{donationDate}</h3>
                <h3><span className="text-lg font-bold text-gray-700">Donation Time: </span>{donationTime}</h3>


                <h3><span className="text-lg font-bold text-gray-700">Donation Status: </span>{status}</h3>
                <h3><span className="text-lg font-bold text-gray-700">Requester Name: </span>{requesterName}</h3>
                <h3><span className="text-lg font-bold text-gray-700">Requester Name: </span>{requesterEmail}</h3>
                <p><span className="text-lg font-bold text-gray-700">Requester Message: </span>{description}</p>
                <div>
                    <button className="p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg mt-4">Donate</button>
                </div>
            </div>
            </div>
        </Container>
        </>
    );
};

export default ViewDetails;