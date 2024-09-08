import { TbHeartQuestion } from "react-icons/tb";
import { GiCupidonArrow } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Container from "../../components/shared/Container";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";


const BloodInfo = () => {
    const axiosSecure = useAxiosSecure();
    const [counterState, setCounterState] = useState(false)

    const { data: totalCount = [], } = useQuery({
        queryKey: ['donor-requestes'],
        queryFn: async () => {
            const { data } = await axiosSecure('/admin/donor/count/related/api/get');
            return data;
        }
    });
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className="bg-gray-100">
                    <Container>
                        <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-20 md:gap-0 text-center py-10">
                            <div className="flex flex-col justify-center items-center px-10 space-y-4">
                                <span className="text-8xl text-yellow-700"><TbHeartQuestion /></span>
                                {
                                    counterState && <CountUp className="text-3xl md:text-4xl lg:text-[70px] font-semibold" start={0} end={totalCount.total_user} duration={5}>
                                        {totalCount.total_user}
                                    </CountUp>
                                }
                                <p className="text-center text-base lg:text-lg text-gray-600">Blood Quest has successfully reached <br /> total users for donations!</p>
                            </div>

                            
                            <div className="flex flex-col justify-center items-center px-10 space-y-4">
                                <span className="text-8xl text-yellow-700"><FaPeopleCarry /></span>
                                {
                                    counterState && <CountUp className="text-3xl md:text-4xl lg:text-[70px] font-semibold" start={0} end={totalCount.total_funding_price} duration={5}>
                                        {totalCount.total_funding_price}
                                    </CountUp>
                                }
                                <p className="text-center text-base lg:text-lg text-gray-600">Blood Quest has raised  <br /> a total donate fund  successfully!</p>
                            </div>

                            <div className="flex flex-col justify-center items-center px-10 space-y-4">
                                <span className="text-8xl text-yellow-700"><GiCupidonArrow /></span>

                                {
                                    counterState && <CountUp className="text-3xl md:text-4xl lg:text-[70px] font-semibold" start={0} end={totalCount.total_blood_donation_request} duration={5}>
                                        {totalCount.total_blood_donation_request}
                                    </CountUp>
                                }
                                <p className="text-center text-base lg:text-lg text-gray-600">Blood Quest has received <br /> total donation requests from users!</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </ScrollTrigger>
        </>
    );
};

export default BloodInfo;