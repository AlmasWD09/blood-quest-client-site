import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/blood-logo.png"
import { VscMenu } from "react-icons/vsc";
import { TfiClose } from "react-icons/tfi";
import Button from "../Button";
import Container from "../Container";


const Header = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    const handleNavigaet = () => {
        navigate('/')
    }
    return (
        <>
            <header className="sticky top-0 left-0 z-[99999] shadow-md w-full h-[80px]  py-4 md:py-2 bg-primaryGray overflow-y-hidden">
                <Container>
                    <div className=" flex items-center">
                        <nav className="relative container flex justify-between items-center">
                            {/* navbar website name and logo */}
                            <div className="w-[20%]">
                                <div
                                    onClick={handleNavigaet}
                                    className="flex items-center cursor-pointer">
                                    <img className="w-[60%]" src={logo} alt="" />
                                    <h1 className="text-3xl md:text-5xl text-primary font-bold font-lato">Blood<span>Quest</span></h1>
                                </div>
                            </div>

                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className={`absolute right-[2px] top-1/2 block -translate-y-1/2  rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${isOpen ? 'navbarTogglerActive' : ''
                                        }`}

                                >
                                    {!isOpen ? (
                                        <TfiClose className="text-2xl " />
                                    ) : (
                                        <VscMenu className="text-2xl " />
                                    )}
                                </button>
                            </div>

                            {/* mobile menu */}
                            <div
                                className={`${isOpen ? "-right-full" : "right-0"
                                    }  w-2/3 h-screen p-4 fixed  top-[78px] z-[999999] bg-primaryGray  shadow-md flex flex-col space-y-4 my-transition`}
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
                                                <button className="w-full text-lg font-semibold font-lato py-2 mt-2">Login</button>
                                            </Link>
                                            {
                                                user ? 
                                                    <button
                                                    onClick={logOut}
                                                    className="w-full px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Logout</button>
                                                    :
                                                    <Link to='/sign-up'>
                                                        <button className="w-full px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Sign Up</button>
                                                    </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* tablet & dastop munu items*/}
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

                                </div>
                            </div>
                            {/* navbar signup and login button */}
                            <div className=" w-[20%] lg:flex lg:justify-end hidden">
                                <div className="flex items-center gap-4">
                                    {
                                        user && <div>
                                            <Link to='/dashboard' className="text-xl font-semibold font-lato text-primary">Dashboard</Link>
                                        </div>
                                    }
                                    <Link to='/login'>
                                        <button className="text-lg font-semibold font-lato py-2">Login</button>
                                    </Link>
                                    {
                                        user ? <div className=" focus:outline-none cursor-pointer relative group">
                                            <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                                <img
                                                    src={user?.photoURL}
                                                    className="object-cover w-full h-full"
                                                    alt={user?.displayName}
                                                />
                                            </div>


                                            {/* navbar logout button here... */}
                                            <div className="hidden group-hover:inline-block absolute -top-[80px] md:top-[40px] md:bottom-[-80px] md:right-0 z-[100000] bg-white text-black rounded-md shadow-sm px-4">
                                                <span className="font-bold font-roboto text-secondery">
                                                    {user?.displayName}
                                                </span>
                                                <h2 className="font-medium text-sm text-secondery">{user?.email}</h2>
                                                <button
                                                    onClick={logOut}
                                                    className="absolute bg-gray-100 text-primary font-bold px-3 rounded ">Logout</button>
                                            </div>
                                        </div>
                                            :
                                            <Link to='/sign-up'>
                                                <button className="w-full px-5 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Sign Up</button>
                                            </Link>
                                    }

                                </div>
                            </div>
                        </nav>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;