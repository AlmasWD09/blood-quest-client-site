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
       <div className="h-[300px] md:h-[600px] bg-hero-bg bg-cover bg-center w-full flex items-center"> 
            <Container>
                <div className="md:max-w-[80%] lg:max-w-[40%] md:mx-auto lg:mx-0 bg-white rounded p-4 lg:p-8 space-y-3 md:space-y-6">
                    <p className="text-xl lg:text-4xl font-semibold tracking-wide text-gray-800 ">Streamlined experience, allowing users to join as blood donors or search for donors with ease.</p>



                    <div className="flex gap-4 md:gap-6 py-3">
                        <button
                            onClick={handleClickDonar}
                            className="px-2 md:px-5 py-2.5 leading-5 text-white font-semibold transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondery focus:outline-none focus:bg-secondery">Join as a donor</button>

                        <button onClick={handleDonars}
                            className="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-secondery relative inline-block px-2 md:px-5 py-2.5 leading-5 before:rounded-md before:hover:bg-primary focus:outline-none before:focus:bg-primary">
                            <span className="relative text-white font-semibold ">Search donor</span>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;