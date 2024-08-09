import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            <div>
                <Outlet />
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;