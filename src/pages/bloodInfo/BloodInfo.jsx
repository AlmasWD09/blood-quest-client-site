import { TbHeartQuestion } from "react-icons/tb";
import { GiCupidonArrow } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const BloodInfo = () => {
    const axiosSecure = useAxiosSecure();

    const {data :totalCount =[],} = useQuery({
        queryKey: ['donor-requestes'],
        queryFn: async() => {
            const {data} = await axiosSecure('/admin/donor/count/related/api/get');
            return data;
        }
    });
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-20 md:gap-0 text-center bg-gray-100">
                <div className="flex flex-col justify-center items-center px-10 space-y-2">
                    <span className="text-8xl text-yellow-700"><TbHeartQuestion /></span>
                    <h2 className="text-4xl lg:text-8xl font-bold">{totalCount.total_user}</h2>
                    <p className="text-center text-base lg:text-lg text-gray-600">Blood Quest has successfully reached <br /> total users for donations!</p>
                </div>
                
                <div className="flex flex-col justify-center items-center px-10 space-y-2">
                    <span className="text-8xl text-yellow-700"><GiCupidonArrow /></span>
                    <h2 className="text-4xl lg:text-8xl font-bold">{totalCount.total_blood_donation_request}</h2>
                    <p className="text-center text-base lg:text-lg text-gray-600">Blood Quest has received <br /> total donation requests from users!</p>
                </div>


                <div className="flex flex-col justify-center items-center px-10 space-y-2">
                    <span className="text-8xl text-yellow-700"><FaPeopleCarry /></span>
                    <h2 className="text-4xl lg:text-8xl font-bold">{totalCount.total_funding_price}</h2>
                    <p className="text-center text-base lg:text-lg text-gray-600">Blood Quest has raised  <br /> a total donate fund  successfully!</p>
                </div>
            </div>
        </>
    );
};

export default BloodInfo;