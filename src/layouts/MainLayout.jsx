import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import ScrollTopButton from "../components/scrollTopButton/ScrollTopButton";
import Header from "../components/shared/header/Header";


const MainLayout = () => {
    return (
        <div>
            {/* header */}
            <Header />
            <div>
                <Outlet />
            </div>
            {/* footer */}
            <Footer />
            <ScrollTopButton />
        </div>
    );
};

export default MainLayout;