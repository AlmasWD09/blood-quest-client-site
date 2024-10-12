import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/sidebar/Sidebar";




const DashboardLayout = () => {
  return (
    <>
     <div className="relative min-h-screen md:flex ">
      {/* sidebar */}
       <Sidebar />

      <div className='flex-1 lg:ml-64'>
      <div className="">
        <Outlet />
      </div>
      </div>



     </div>
    </>
  );
};

export default DashboardLayout;