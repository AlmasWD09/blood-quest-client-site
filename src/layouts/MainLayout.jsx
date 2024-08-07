import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;