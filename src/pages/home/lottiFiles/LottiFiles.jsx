import Lottie from "lottie-react"
import image01 from "../../../assets/images/lottiAaimation/animation01.json"
import image02 from "../../../assets/images/lottiAaimation/animation02.json"
import image03 from "../../../assets/images/lottiAaimation/animation03.json"
import image04 from "../../../assets/images/lottiAaimation/animation04.json"
import image05 from "../../../assets/images/lottiAaimation/animation05.json"
import image06 from "../../../assets/images/lottiAaimation/animation06.json"


const LottiFiles = () => {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-center items-center">
        <Lottie className="w-full h-96" animationData={image01} loop={true} />
        <Lottie className="w-full h-72 md:h-44" animationData={image02} loop={true} />
        <Lottie className="w-full h-96" animationData={image03} loop={true} />
        <Lottie className="w-full h-40 lg:h-96" animationData={image04} loop={true} />
        <Lottie className="w-full h-96 lg:h-44" animationData={image05} loop={true} />
        <Lottie className="w-full h-96 lg:h-56" animationData={image06} loop={true} />
        </div>
        </>
    );
};

export default LottiFiles;