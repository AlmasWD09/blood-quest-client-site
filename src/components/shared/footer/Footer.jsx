import Container from "../Container";
import logo from "../../../assets/blood-logo.png"
import { GrGithub } from "react-icons/gr";
import { LiaFacebookF, LiaLinkedinIn } from "react-icons/lia";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <>
            <footer className=" relative bg-red-900 text-white mt-20">
                <div className="w-full top-0 left-0 overflow-hidden">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-white"></path>
                    </svg>
                    {/* ****** */}
                    <Container>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-20 py-20">
                            {/* one */}
                            <div className="flex flex-col space-y-2 -mt-5">
                                <div className="flex items-center">
                                    <img src={logo} alt="" />
                                    <h1 className="text-5xl text-primary font-bold font-lato">Blood<span>Quest</span></h1>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nisi corporis quidem incidunt dolorem assumenda.</p>
                                <div className="flex gap-3">
                                    <Link to='https://www.facebook.com/profile.php?id=100011977514856'><button className="bg-secondery hover:bg-primary transition-all duration-300 text-xl p-4 rounded-md"><LiaFacebookF /></button></Link>
                                    <Link to='https://github.com/AlmasWD09'><button className="bg-secondery hover:bg-primary transition-all duration-300 text-xl p-4 rounded-md"><GrGithub /></button></Link>
                                    <Link to='https://www.linkedin.com/in/almas-hossain'><button className="bg-secondery hover:bg-primary transition-all duration-300 text-xl p-4 rounded-md"><LiaLinkedinIn /></button></Link>
                              
                                </div>
                            </div>
                            {/* three */}
                            <div className="flex flex-col space-y-2 ">
                                <h1 className="text-3xl font-semibold font-lato">Quick links</h1>
                                <span className="w-20 h-[3px] rounded-full bg-primary"></span>
                                <ul>
                                    <Link to='/'><li className="hover:text-primary cursor-pointer">Home</li></Link>
                                    <Link to='/donation-request'><li className="hover:text-primary cursor-pointer">Donation Request</li></Link>
                                    <Link to='/published-blogs'><li className="hover:text-primary cursor-pointer">Published Blogs</li></Link>
                                    <Link to='/fundings'><li className="hover:text-primary cursor-pointer">Foundings</li></Link>
                                    
                                </ul>
                            </div>
                           
                            {/* four */}
                            <div className="flex flex-col space-y-2 ">
                                <h1 className="text-3xl font-semibold font-lato">Contact Us</h1>
                                <span className="w-20 h-[3px] rounded-full bg-primary"></span>
                               <p className="flex items-center"><FaLocationDot className="text-xl text-secondery"/> Mymensingh-Fulbaria, Bangladesh</p>
                               <p className="flex items-center"><IoCallSharp className="text-xl text-secondery"/> +01704995802</p>
                               <p className="flex items-center"><MdEmail className="text-xl text-secondery mr-1"/>skalmas634@gmail.com</p>
                            </div>
                            {/* two */}
                            <div className="flex flex-col space-y-2 ">
                                <h1 className="text-3xl font-semibold font-lato">Collections</h1>
                                <span className="w-20 h-[3px] rounded-full bg-primary"></span>
                                <p>Product Api</p>
                                <p>Airticle</p>
                                <p>Trams and Conditions</p>
                            </div>
                         
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    );
};

export default Footer;