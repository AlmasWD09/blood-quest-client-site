
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { NavLink } from "react-router-dom";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className="relative flex justify-between items-center bg-gray-200 px-6 py-6">
            {/* navbar website name and logo */}
            <div className="w-[20%]">
                <div>
                    <h1>Blood<span>Quest</span></h1>
                </div>
            </div>


            {/* navbar website menu items */}
            <div className=" w-[60%] lg:flex lg:justify-center lg:items-center hidden">
                <div>
                    <NavLink to='/' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Home
                    </NavLink>
                    <NavLink to='/about' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        About
                    </NavLink>
                    <NavLink to='/contact' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Contact
                    </NavLink>
                </div>
            </div>
            {/* navbar signup and login button */}
            <div className=" w-[20%] lg:flex lg:justify-end hidden">
                <div className="flex gap-4">
                    <button>Login</button>
                    <button className="px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Sign Up</button>
                </div>
            </div>




            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div className="flex  lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className={`absolute right-[2px] top-1/2 block -translate-y-1/2  rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${isOpen ? 'navbarTogglerActive' : ''
                        }`}

                >
                    {!isOpen ? (
                        <VscMenu className="text-4xl " />
                    ) : (
                        <TfiClose className="text-4xl " />
                    )}
                </button>
            </div>

            <div
                className={`lg:hidden absolute inset-x-12 md:inset-x-11 lg:inset-x-0 z-20  min-h-[70vh] w-[88%] md:w-[94%] px-6 mt-[486px] transition-all duration-300 ease-in-out bg-gray-300 dark:bg-gray-800 ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                    }`}
            >
                <div className="flex flex-col lg:hidden">
                    <NavLink to='/' className=" px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md  dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Home
                    </NavLink>
                    <NavLink to='/about' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md  dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        About
                    </NavLink>
                    <NavLink to='/contact' className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md  dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                        Contact
                    </NavLink>
            
                    {/* navbar Sign Up and login button */}
                    <div className="md:w-[20%] ">
                        <div className="flex flex-col gap-4 pb-4">
                            <button className=" py-2 mt-2">Login</button>
                            <button className="px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;