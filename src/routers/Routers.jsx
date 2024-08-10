import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PublishedBlogs from "../pages/publishedBlogs/PublishedBlogs";
import DonationRequest from "../pages/donationRequest/DonationRequest";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import Fundings from "../pages/fundings/Fundings";
import SearchPage from "../pages/searchPage/SearchPage";
import AdminHome from "../pages/dashboard/admin/adminHome/AdminHome";
import AllUsers from "../pages/dashboard/admin/allUsers/AllUsers";
import AllBloodDonationRequest from "../pages/dashboard/admin/allBloodDonationRequest/AllBloodDonationRequest";
import ContentManagement from "../pages/dashboard/admin/contentManagement/ContentManagement";
import DonorHome from "../pages/dashboard/Donor/donorHome/DonorHome";
import MyDonationRequest from "../pages/dashboard/Donor/myDonationRequest/MyDonationRequest";
import CreateDonationRequest from "../pages/dashboard/Donor/createDonationRequest/CreateDonationRequest";
import VolunteerHome from "../pages/dashboard/volunteer/volunteerHome/VolunteerHome";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement:<ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:'/donation-request',
          element:<DonationRequest />,
        },
        {
          path:'/published-blogs',
          element:<PublishedBlogs />,
        },
        {
          path:'/fundings',
          element:<Fundings />,
        },
        {
          path:'/search-page',
          element:<SearchPage />,
        },
      ],
    },

    // login and sign up routes
    {
      path:'/sign-up',
      element:<SignUp />,
    },
    {
      path:'/login',
      element:<Login />,
    },
    // dashboard routers here....
    {
      path:'/dashboard',
      element:<DashboardLayout />,
      children:[
        // ============ donar dashboard part start =============
        {
          path:'donor-home',
          element:<DonorHome />
        },
        {
          path:'my-donation-request',
          element:<MyDonationRequest />
        },
        {
          path:'create-donation-request',
          element:<CreateDonationRequest />
        },
        
        // ============ donar dashboard part end ===============



        // ============ volunteer dashboard part start =============
        {
          path:'volunteer-home',
          element:<VolunteerHome />,
        },
        {
          path:'all-blood-donation-request-volunteer',
          element:<AllBloodDonationRequest />,
        },
        {
          path:'content-management-volunteer',
          element:<ContentManagement />,
        },
        // ============ volunteer dashboard part end ===============



        // ============ admin dashboard part start =============
          {
            path:'admin-home',
            element:<AdminHome />,
          },
          {
            path:'all-users',
            element:<AllUsers />,
          },
          {
            path:'all-blood-donation-request-admin',
            element:<AllBloodDonationRequest />,
          },
          {
            path:'content-management-admin',
            element:<ContentManagement />,
          },
        // ============ admin dashboard part end ===============
      ]
    },
  ]);
  export default router;