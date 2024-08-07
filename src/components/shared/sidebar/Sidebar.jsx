import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const{role}= 'donar'
    return (
        <>
        <div className="bg-gray-100 text-gray-800 lg:h-screen py-4 md:px-2">

                <div className="flex justify-between items-center bg-green-200">
                    {/* website name and logo */}
                    <div className="w-full flex items-center gap-1 rounded-md lg:shadow-md p-4">
                        <Link to='/' className="flex items-center">
                            <img src={'image'} alt="image" />
                            <h2 className="text-2xl font-bold">Teach<span className="text-primary">Em</span></h2>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden pr-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <TiThMenu className="text-2xl " />
                            ) : (
                                <IoMdClose className="text-2xl " />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div className={`absolute flex flex-col lg:hidden bg-gray-100 w-[89%] z-20 transition-all duration-300 ease-in-out 
             ${isOpen ? 'translate-x-8 opacity-100' : 'opacity-0 -translate-x-full'
                    }`}
                >
                    <div className="">
                        {/* menu items for donar */}
                        

                        {/* menu items for volunteer */}
                        

                        {/* menu items for admin */}
                        


                        {/* user---> Home/Profile/Logout menu */}
                        <div className="">
                            <hr />
                            {/* Home Menu */}
      

                            {/* profile menu */}


                            {/* logout menu */}

                        </div>
                    </div>
                </div>



                {/*------> Large Device for <----------*/}
                <div className="hidden lg:block">
                    {/* menu items for donar */}


                    {/* menu items for volunteer */}


                    {/* menu items for admin */}



                    {/* user---> Home/Profile/Logout menu */}
                    <div className="lg:mt-20">
                        <hr />
                        {/* Home Menu */}


                        {/* profile menu */}


                        {/* logout menu */}


                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;