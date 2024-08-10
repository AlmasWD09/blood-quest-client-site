import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate = useNavigate();

    // handle donar
    const handleClickDonar = () =>{
        navigate('/sign-up')
    }
    // handle donars...
    const handleDonars = () =>{
        navigate('/search-page')
    }
    return (
        <div className="bg-primaryGray h-[300px] flex justify-center items-center">
            <div className="flex justify-center items-center gap-6">
                <button 
                onClick={handleClickDonar}
                className=" px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Join now donar</button>

                <button
                onClick={handleDonars}
                className=" px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Search donars</button>
            </div>
        </div>
    );
};

export default Banner;