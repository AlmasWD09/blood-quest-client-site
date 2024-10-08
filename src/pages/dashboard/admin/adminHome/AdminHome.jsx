import LoadindSpenier from "../../../../components/LoadindSpenier";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
    const{user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data :totalCount =[], isPending:loading} = useQuery({
        queryKey: ['donor-requestes'],
        queryFn: async() => {
            const {data} = await axiosSecure('/admin/donor/count/related/api/get');
            return data;
        }
    });


    if(loading) {
        return <LoadindSpenier />;
    }
    return (
        <div className="h-screen">
        <div className="text-center mt-10">
            <h1 className="text-3xl lg:text-5xl font-semibold text-green-500 pt-10 lg:pt-0">Hellow <span className="uppercase">{user?.displayName}</span> Wellcome!!</h1>
            <p className="text-xl font-semibold text-green-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatibus exercitationem voluptates.</p>
        </div>
        {/* ********* */}
        <div className="flex flex-col lg:flex-row justify-center gap-4 mt-10">
            <div className="bg-green-200 px-16 py-8">
                <h3>Total Users: <span className="text-xl font-bold">({totalCount.total_user})</span></h3>
            </div>
            <div className="bg-green-200 px-16 py-8">Total Fundings <span className="text-xl font-bold">${totalCount.total_funding_price}</span></div>
            <div className="bg-green-200 px-16 py-8">Total Blood Donation Request <span className="text-xl font-bold">({totalCount.total_blood_donation_request})</span></div>
        </div>
        </div>
    );
};

export default AdminHome;


