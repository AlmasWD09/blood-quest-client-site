import Container from "../Container";
import logo from "../../../assets/blood-logo.png"
import { GrGithub } from "react-icons/gr";
import { LiaFacebookF, LiaLinkedinIn } from "react-icons/lia";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";



const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className=" relative bg-primary text-white mt-10 lg:mt-10">
                <div className="w-full top-0 left-0 overflow-hidden">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-white"></path>
                    </svg>
                    {/* ****** */}
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-20 py-10">
                            {/* logo/webside-name */}
                            <div className="flex flex-col space-y-4 -mt-5 lg:mr-3">
                                <div className="flex items-center">
                                    <img className="bg-white rounded-lg" src={logo} alt="" />
                                    <h1 className="text-4xl md:text-5xl text-white font-bold font-lato">Blood<span>Quest</span></h1>
                                </div>
                                <p>Join the quest to save lives. Donate blood today and be a hero for humanity.</p>
                                <div className="flex gap-3">
                                    <Link to='https://www.facebook.com/profile.php?id=100011977514856'>
                                        <button className="group hover:bg-secondery bg-white transition-all duration-300 text-xl p-4 rounded-md">
                                            <LiaFacebookF className="text-primary group-hover:text-white transition-all duration-300" />
                                        </button>
                                    </Link>

                                    <Link to='https://github.com/AlmasWD09'>
                                        <button className="group hover:bg-secondery bg-white transition-all duration-300 text-xl p-4 rounded-md">
                                            <GrGithub className="text-primary group-hover:text-white transition-all duration-300" />
                                        </button>
                                    </Link>

                                    <Link to='https://www.linkedin.com/in/almas-hossain'>
                                        <button className="group hover:bg-secondery bg-white transition-all duration-300 text-xl p-4 rounded-md">
                                            <LiaLinkedinIn className="text-primary group-hover:text-white transition-all duration-300" />
                                        </button>
                                    </Link>
                                </div>

                            </div>
                            {/* link */}
                            <div className="flex flex-col space-y-2 lg:ml-3">
                                <h1 className="text-3xl font-semibold font-lato">Quick links</h1>
                                <span className="w-20 h-[3px] rounded-full bg-primary"></span>
                                <ul>
                                    <Link to='/'><li className="hover:text-secondery cursor-pointer flex items-center"><IoMdArrowDropleft className="text-3xl" />Home</li></Link>
                                    <Link to='/donation-request'><li className="hover:text-secondery cursor-pointer flex items-center"><IoMdArrowDropleft className="text-3xl" />Donation Request</li></Link>
                                    <Link to='/published-blogs'><li className="hover:text-secondery cursor-pointer flex items-center"><IoMdArrowDropleft className="text-3xl" />Published Blogs</li></Link>
                                    <Link to='/fundings'><li className="hover:text-secondery cursor-pointer flex items-center"><IoMdArrowDropleft className="text-3xl" />Foundings</li></Link>

                                </ul>
                            </div>

                            {/* collection */}
                            <div className="flex flex-col space-y-2 ">
                                <h1 className="text-3xl font-semibold font-lato">Collections</h1>
                                <span className="w-20 h-[3px] rounded-full bg-primary"></span>
                                <p>Product Api</p>
                                <p>Airticle</p>
                                <p>Trams and Conditions</p>
                            </div>

                            {/* contact */}
                            <div className="flex flex-col space-y-2 ">
                                <h1 className="text-3xl font-semibold font-lato">Contact Us</h1>
                                <span className="w-20 h-[3px] rounded-full bg-primary"></span>
                                <p className="flex "><FaLocationDot className="text-2xl text-white mt-1" /> Mymensingh-Fulbaria, Bangladesh</p>
                                <p className="flex items-center"><IoCallSharp className="text-xl text-white" /> +01704995802</p>
                                <p className="flex items-center"><MdEmail className="text-xl text-white mr-1" />skalmas634@gmail.com</p>
                            </div>
                        </div>
                        <hr />

                        <div className="py-10">
                            <div className="text-center space-y-1">
                                <p className="text-xl text-white">Copyright © {currentYear} Blood Quest - Design By <span className="font-bold">Almas Hossain</span>.</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    );
};

export default Footer;