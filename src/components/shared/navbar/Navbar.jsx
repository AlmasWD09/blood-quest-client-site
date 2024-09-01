
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../Container";
import logo from "../../../assets/blood-logo.png"
import useAuth from "../../../hooks/useAuth";
import Button from "../Button";

const Navbar = () => {
    const { user,logOut} = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

const handleClick = () =>{
    setIsOpen(!isOpen)
}
const handleNavigaet = () =>{
    navigate('/')
}
    return (
        <>
            <div  className="bg-primaryGray">
                <Container>
                    <nav  className="relative flex justify-between items-center  py-6">
                        {/* navbar website name and logo */}
                        <div className="w-[20%]">
                            <div 
                            onClick={handleNavigaet}
                            className="flex items-center cursor-pointer">
                                <img className="w-[60%]" src={logo} alt="" />
                                <h1 className="text-3xl md:text-5xl text-primary font-bold font-lato">Blood<span>Quest</span></h1>
                            </div>
                        </div>


                        {/* navbar website menu items */}
                        <div className=" w-[60%] lg:flex lg:justify-center lg:items-center items-center hidden">
                            <div className="flex items-center">
                                <NavLink to='/' >
                                   <Button text={" Home"} />
                                </NavLink>
                                <NavLink to='/donation-request' >
                                <Button text={"Donation Request"} />
                                   
                                </NavLink>
                                <NavLink to='/published-blogs' >
                                <Button text={"Published Blogs"} />
                                    
                                </NavLink>
                                <NavLink to='/fundings' >
                                <Button text={"Fundings"} />
                                    
                                </NavLink>
                                {
                                    user && <NavLink to='/dashboard' >
                                        <Button text={"Dashboard"} />
                                    </NavLink>
                                }
                            </div>
                        </div>
                        {/* navbar signup and login button */}
                        <div className=" w-[20%] lg:flex lg:justify-end hidden">
                            <div className="flex items-center gap-4">
                                <Link to='/login'>
                                    <button className="text-xl font-semibold font-lato py-2">Login</button>
                                </Link>
                                {
                                    user ? <div  className="relative focus:outline-none cursor-pointer">
                                    <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                        <img
                                        onClick={handleClick}
                                            src={user?.photoURL}
                                            className="object-cover w-full h-full"
                                            alt={user?.displayName}
                                        />
                                    </div>
                                        {
                                            isOpen && <button 
                                            onClick={logOut}
                                            className="absolute bg-green-300 px-3 rounded">LogOut</button>
                                        }
                                </div>
                                        :
                                        <Link to='/sign-up'>
                                            <button className="w-full px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Sign Up</button>
                                        </Link>
                                }
                            </div>
                        </div>




                        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className={`absolute right-[2px] top-1/2 block -translate-y-1/2  rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${isOpen ? 'navbarTogglerActive' : ''
                                    }`}

                            >
                                {!isOpen ? (
                                    <VscMenu className="text-2xl " />
                                ) : (
                                    <TfiClose className="text-2xl " />
                                )}
                            </button>
                        </div>

                        <div
                            className={`lg:hidden absolute inset-x-16 md:inset-x-11 lg:inset-x-0 z-20  min-h-[100vh] w-[88%] md:w-[94%] px-6 py-10 mt-[610px] transition-all duration-300 ease-in-out bg-primaryGray dark:bg-gray-800 ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                                }`}
                        >
                            <div className="flex flex-col lg:hidden space-y-4">
                            <NavLink to='/' >
                                   <Button text={" Home"} />
                                </NavLink>
                                <NavLink to='/donation-request' >
                                <Button text={"Donation Request"} />
                                   
                                </NavLink>
                                <NavLink to='/published-blogs' >
                                <Button text={"Published Blogs"} />
                                    
                                </NavLink>
                                <NavLink to='/fundings' >
                                <Button text={"Fundings"} />
                                    
                                </NavLink>
                                {
                                    user && <NavLink to='/dashboard' >
                                        <Button text={"Dashboard"} />
                                    </NavLink>
                                }

                                {/* navbar Sign Up and login button */}
                                <div className="md:w-[20%] ">
                                    <div className="flex flex-col gap-4 pb-4">
                                        <Link to='/login'>
                                            <button className="w-full py-2 mt-2">Login</button>
                                        </Link>
                                        <Link to='/sign-up'>
                                            <button className="w-full px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Sign Up</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </Container>
            </div>
        </>
    );
};

export default Navbar;