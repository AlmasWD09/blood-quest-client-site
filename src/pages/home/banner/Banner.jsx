import { useNavigate } from "react-router-dom";
import Container from "../../../components/shared/Container";


const Banner = () => {
    const navigate = useNavigate();

    // handle donar
    const handleClickDonar = () => {
        navigate('/sign-up')
    }
    // handle donars...
    const handleDonars = () => {
        navigate('/search-page')
    }
    return (
        <div className="h-[300px] md:h-[600px] bg-hero-bg bg-cover bg-center w-full flex items-center ">
            <Container>
                <div className="md:max-w-[40%] bg-white rounded p-2 md:p-8 space-y-3 md:space-y-6">
                    <p className="text-xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">The application will feature
                        Join as a Donor and Search Donors buttons for easy access.</p>



                    <div className="flex gap-2 md:gap-6">
                        <button
                            onClick={handleClickDonar}
                            className="px-2 md:px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Join as a Donor</button>

                        <button onClick={handleDonars}
                            className="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-secondery relative inline-block px-2 md:px-5 py-2.5 leading-5">
                            <span className="relative text-white">Search donar</span>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;