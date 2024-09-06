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
// import ContentManagement from "../pages/dashboard/admin/contentManagement/ContentManagement";
import DonorHome from "../pages/dashboard/Donor/donorHome/DonorHome";
import MyDonationRequest from "../pages/dashboard/Donor/myDonationRequest/MyDonationRequest";
import CreateDonationRequest from "../pages/dashboard/Donor/createDonationRequest/CreateDonationRequest";
import VolunteerHome from "../pages/dashboard/volunteer/volunteerHome/VolunteerHome";
import MyDonationEdit from "../pages/dashboard/Donor/myDonationRequest/MyDonationEdit";
import CommonLayout from "../pages/dashboard/commonLayout/CommonLayout";
import UserProfile from "../pages/dashboard/common/profile/UserProfile";
import AllDonationRequestVolunteer from "../pages/dashboard/volunteer/allDonationRequestVolunteer/AllDonationRequestVolunteer";
import AllBloodDonationAdmin from "../pages/dashboard/admin/allBloodDonation/AllBloodDonationAdmin";
import ContentManagements from "../pages/dashboard/admin/contentManagement/ContentManagements";
import ContentManagement from "../pages/dashboard/volunteer/contentManagement/ContentManagement";
import AddBlog from "../pages/dashboard/volunteer/addBlog/AddBlog";
import UpdateBlog from "../pages/dashboard/volunteer/updateBlog/UpdateBlog";
import BloodDonationRequestUpdate from "../pages/dashboard/admin/bloodDonationRequestUpdate/BloodDonationRequestUpdate";
import ViewDetails from "../pages/viewDetails/ViewDetails";
import PrivatRoutes from "./PrivatRoutees";
import PublishedDetails from "../components/publishedDetails/PublishedDetails";


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
          path:'/donation-request-view-details/:id',
          element:<PrivatRoutes>
            <ViewDetails />
          </PrivatRoutes>
        },
        {
          path:'/published-blogs',
          element:<PublishedBlogs />,
        },
        {
          path:'/published-blogs-details/:id',
          element:<PublishedDetails />,
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
        {
          path:'/dashboard',
          element:<CommonLayout />
        },
        {
          path:'profile',
          element:<UserProfile />,
        },
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
          path:'my-donation-eddit/:id',
          element:<MyDonationEdit />
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
          element:<AllDonationRequestVolunteer />,
        },
        {
          path:'content-management-volunteer',
          element:<ContentManagement />,
        },
        {
          path:'add-blog',
          element:<AddBlog />,
        },
        {
          path:'update-blog/:id',
          element:<UpdateBlog />,
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
            path:'all-blood-donation-admin',
            element:<AllBloodDonationAdmin />,
          },
          {
            path:'content-management-admin',
            element:<ContentManagements />,
          },
          {
            path:'blood-donation-request-update-admin/:id',
            element:<BloodDonationRequestUpdate />,
          },
        // ============ admin dashboard part end ===============
      ]
    },
  ]);
  export default router;