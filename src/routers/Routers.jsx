import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PublishedBlogs from "../pages/publishedBlogs/PublishedBlogs";
import DonationRequest from "../pages/donationRequest/DonationRequest";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import MyDonationRequest from "../pages/dashboard/donar/MyDonationRequest";
import CreateDonationRequest from "../pages/dashboard/donar/CreateDonationRequest";


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
      ],
    },

    // login and sign up routes
    {
      path:'/signup',
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
          path:'my-donation-request',
          element:<MyDonationRequest />
        },
        {
          path:'create-donation-request',
          element:<CreateDonationRequest />
        },
        // ============ donar dashboard part end ===============
      ]
    },
  ]);
  export default router;