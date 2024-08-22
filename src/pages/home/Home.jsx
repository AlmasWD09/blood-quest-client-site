import useAuth from "../../hooks/useAuth";
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
           <Contact />
        </div>
    );
};

export default Home;