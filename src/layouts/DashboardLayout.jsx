import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/sidebar/Sidebar";
import Header from "../components/shared/header/Header";



const DashboardLayout = () => {
  return (
    <>
     <div className="min-h-screen flex flex-col lg:flex-row gap-3 ">

      <div className="bg-gray-100 w-full lg:w-[20%] flex flex-col">
       <Sidebar />
      </div>


      <div className="">
        <Outlet />
      </div>



     </div>
    </>
  );
};

export default DashboardLayout;