import { useParams } from "react-router-dom";
import LoadindSpenier from "../../components/LoadindSpenier";
import Container from "../../components/shared/Container";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DonateModal from "../../components/modal/donateModal/DonateModal";

const ViewDetails = () => {
    const {user, loading } = useAuth();
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [isOpen, setIsOpen] = useState(false)
    
    // single request data by mongodb
    const { data: singelRequestData = {}, isLoading } = useQuery({
        queryKey: ['single-request-data', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/navbar/viewDetails/blood/request/api/${id}`);
            return res.data;
        }
    });
    const { status, requesterName, requesterEmail, recipientName, hospitalName, district, upazila, donationDate, donationTime, fullAddress, bloodGroup, description } = singelRequestData || {};

    // single user data by mongodb
    const { data: userData = {}, } = useQuery({
        queryKey: ['single-user-data',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/navbar/user/bloodGroup/related/api/${user?.email}`);
            return res.data;
        }
    });


    // Time conversion function
    const hourConvert = (time24) => {
        const [hour24, minute] = time24.split(':').map(Number);
        const period = hour24 >= 12 ? 'PM' : 'AM';
        const hour12 = hour24 % 12 || 12;
        const paddedMinute = minute.toString().padStart(2, '0');
        return `${hour12}:${paddedMinute} ${period}`;
    };
    // Convert time only if donationTime is defined
    const convertTime = donationTime ? hourConvert(donationTime) : 'Time not available';


// open for modal
const handleOpenModal = () =>{
    setIsOpen(true)
}


// close for modal
const handleCloseModal = () =>{
    setIsOpen(false)
}





    if (loading || isLoading) return <LoadindSpenier />;
    return (
        <Container>
            <div className="max-w-2xl mx-auto">
                <h1 className="bg-green-300 text-xl md:text-2xl text-secondery font-bold text-center py-5 md:py-5 uppercase">
                    Blood Donation request Details
                </h1>
                <div className="border-2 border-primary space-y-3 p-4 mt-5">
                    <h3><span className="text-lg font-bold text-gray-700">Recipient Name: </span>{recipientName}</h3>
                    <h3><span className="text-lg font-bold text-gray-700">Blood Group: </span>{bloodGroup}</h3>
                    <h3><span className="text-lg font-bold text-gray-700">Location: </span>{upazila}, {district}</h3>
                    <h3><span className="text-lg font-bold text-gray-700">Hospital: </span>{hospitalName}</h3>
                    <h3><span className="text-lg font-bold text-gray-700">Address: </span>{fullAddress}</h3>
                    <h3><span className="text-lg font-bold text-gray-700">Donation Date: </span>{donationDate}</h3>
                    <h3><span className="text-lg font-bold text-gray-700">Donation Time: </span>{convertTime}</h3>
                    <h3><span className="text-lg font-bold text-gray-700">Donation Status: </span>{status}</h3>
                    <h3><span className="text-lg font-bold text-gray-700">Requester Name: </span>{requesterName}</h3>
                    <h3><span className="text-lg font-bold text-gray-700">Requester Email: </span>{requesterEmail}</h3>
                    <p><span className="text-lg font-bold text-gray-700">Requester Message: </span>{description}</p>
                    <div>
                        <button 
                        disabled={userData?.bloodGroup !== bloodGroup}
                        onClick={handleOpenModal}
                        className={`p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-lg mt-4 ${
                            userData?.bloodGroup !== bloodGroup ? 'bg-gray-400 text-gray-200' : 'bg-primary text-white'
                          }`}>Donate</button>
                        <DonateModal isOpen={isOpen} onClose={handleCloseModal} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ViewDetails;
