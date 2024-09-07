import useAuth from "../../hooks/useAuth";
import BloodInfo from "../bloodInfo/BloodInfo";
import Services from "../services/Services";
import Banner from "./banner/Banner";
import Contact from "./contact/Contact";
import Features from "./features/Features";


const Home = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
           <Banner />
           <Features />
           <Services />
           <BloodInfo />
           <Contact />
        </div>
    );
};

export default Home;