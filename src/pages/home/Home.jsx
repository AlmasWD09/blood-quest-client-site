
import BloodInfo from "../bloodInfo/BloodInfo";
import Services from "../services/Services";
import Banner from "./banner/Banner";
import Contact from "./contact/Contact";
import LottiFiles from "./lottiFiles/LottiFiles";


const Home = () => {
    return (
        <div>
           <Banner />
           <LottiFiles />
           <Services />
           <BloodInfo />
           <Contact />
        </div>
    );
};

export default Home;