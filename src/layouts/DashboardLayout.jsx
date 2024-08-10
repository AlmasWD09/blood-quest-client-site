import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="flex gap-3">
          <div>
          <Sidebar />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
    );
};

export default DashboardLayout;