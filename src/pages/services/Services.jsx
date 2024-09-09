import Container from "../../components/shared/Container";
import service01 from "../../assets/images/service/service01.png";
import service02 from "../../assets/images/service/service02.png";
import service03 from "../../assets/images/service/service03.png";
import service04 from "../../assets/images/service/service04.png";
import service05 from "../../assets/images/service/service05.png";

const Services = () => {
    return (
        <>
            <Container>
                <div className="my-8">
                    <div className="max-w-md mx-auto text-center pb-8">
                        <h1 className="text-center text-5xl font-bold font-lato text-secondery">Our Services</h1>
                        <p>Connects donors with recipients, handles donation requests, tracks donations, and raises health awareness</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Item 1 */}
                        <div className="flex flex-col justify-center items-center bg-gray-100 px-10 py-8 lg:py-20 space-y-2">
                            <img src={service01} alt="Furnished Rooms" />
                            <h2 className="text-xl md:text-3xl text-gray-600 font-semibold">Furnished Rooms</h2>
                            <p className="text-center text-sm lg:text-lg text-gray-600">Furnished rooms provide<br />for comfortable, including beds, tables, chairs etc.</p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col justify-center items-center bg-gray-100 px-10 py-8 lg:py-20 md:space-y-2 md:col-span-2">
                            <img src={service02} alt="Daily Fitness Training" />
                            <h2 className="text-xl md:text-3xl text-gray-600 font-semibold">Daily Fitness Training</h2>
                            <p className="text-center text-base lg:text-lg text-gray-600">The training enhances strength, endurance,<br />and flexibility through consistent exercise routines.</p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col justify-center items-center bg-gray-100 px-10 py-8 lg:py-20 space-y-2">
                            <img src={service03} alt="Affordable Pricing" />
                            <h2 className="text-xl md:text-3xl text-gray-600 font-semibold">Affordable Pricing</h2>
                            <p className="text-center text-base lg:text-lg text-gray-600">Affordable pricing ensures quality products and services within budget-friendly ranges for everyone.</p>
                        </div>

                        {/* Item 4 */}
                        <div className="flex flex-col justify-center items-center bg-gray-100 px-10 py-8 lg:py-20 space-y-2">
                            <img src={service04} alt="24/7 Security Guards" />
                            <h2 className="text-xl md:text-3xl text-gray-600 font-semibold">24/7 Security Guards</h2>
                            <p className="text-center text-base lg:text-lg text-gray-600">Security guards protect premises, ensuring safety through vigilance, patrolling, and emergency response!</p>
                        </div>

                        {/* Item 5 */}
                        <div className="flex flex-col justify-center items-center bg-gray-100 px-10 py-8 lg:py-20 space-y-2">
                            <img src={service05} alt="Award-Winning Support" />
                            <h2 className="text-xl md:text-3xl text-gray-600 font-semibold">Award-Winning Support</h2>
                            <p className="text-center text-base lg:text-lg text-gray-600">Award-winning support delivers exceptional service with expertise, responsiveness, and customer satisfaction.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Services;
