import AreaChart from "../../../../components/charts/AreaChart";
import DonutChart from "../../../../components/charts/DonutChart";
import LoadindSpenier from "../../../../components/LoadindSpenier";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { BiSolidUser } from "react-icons/bi";
import { RiFundsBoxLine } from "react-icons/ri";
import { FiGitPullRequest } from "react-icons/fi";



const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    

    const { data: totalCount = [], isPending: loading } = useQuery({
        queryKey: ['donor-requestes'],
        queryFn: async () => {
            const { data } = await axiosSecure('/admin/donor/count/related/api/get');
            return data;
        }
    });

    if (loading) {
        return <LoadindSpenier />;
    }
console.log(totalCount);

    return (
        <div className="h-screen mt-32 lg:mt-0">
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 mt-10 px-8 lg:px-32">
                <div className="bg-gradient-to-r from-red-200  to-sky-400 py-10 lg:p-8 rounded-2xl flex justify-center items-center text-white">
                    <div>
                        <div className="flex items-center justify-center">
                        <h3 className="text-4xl font-bold">{totalCount.total_user}</h3>
                        <BiSolidUser className="text-2xl" />
                        </div>
                        <p>total donor</p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-green-500  to-yellow-400 py-10 lg:p-8 rounded-2xl flex justify-center items-center text-white">
                    <div>
                        <div className="flex items-center justify-center">
                        <h3 className="text-4xl font-bold">${totalCount.total_funding_price}</h3>
                        <RiFundsBoxLine className="text-2xl" />
                        </div>
                        <p>total funding</p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-sky-300  to-fuchsia-500 py-10 lg:p-8 rounded-2xl flex justify-center items-center text-white">
                    <div className="">
                        <div className="flex items-center justify-center">
                        <h3 className="text-4xl font-bold">{totalCount.total_blood_donation_request}</h3>
                        <FiGitPullRequest className="text-2xl" />
                        </div>
                        <p>total donation requesst</p>
                    </div>
                </div>
            </div>

            {/* apex chart */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0 mt-20">
                <AreaChart />
                <DonutChart totalCount={totalCount}/>
            </div>

        </div>
    );
};

export default AdminHome;


