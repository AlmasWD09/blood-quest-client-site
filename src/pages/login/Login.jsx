import { useForm } from "react-hook-form";
import {  useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";
import { TfiClose } from "react-icons/tfi";
import useAuth from "../../hooks/useAuth";


const Login = () => {
    const {user} = useAuth()
  console.log(user);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);

    }

// handle Back
const handleBack = () =>{
navigate(-1)
}
    return (
        <>
            <Navbar />
            <section className="">
                <div className="flex items-center justify-center min-h-screen px-6 ">
                    <div className="relative bg-primaryGray w-full max-w-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8 rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="">
                                <h2 className=" pb-4 font-medium text-center text-gray-800 capitalize border-blue-500 dark:border-blue-400 dark:text-white">Please Login</h2>
                            </div>

                               {/* user email */}
                               <div className="w-full mt-6">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your email
                                    </label>

                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            {...register("email", { required: true })}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                                    </div>
                                </div>

                                 {/* password */}
                                 <div className="relative w-full mt-6">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your password
                                    </label>
                                    <div>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password" {...register("password",
                                                {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
                                                })}
                                            className="block w-full pl-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                                        {/* eye icon setup */}
                                        <p className="absolute top-10 right-3 cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                        </p>
                                    </div>
                                    <small>{errors.password?.type === 'require' && <span className="text-red-400">password is required</span>}</small>
                                    <small>{errors.password?.type === 'minLength' && <span className="text-red-400">password must be 6 Carecter</span>}</small>
                                    <small>{errors.password?.type === 'maxLength' && <span className="text-red-400">password less then 20 Carecter</span>}</small>
                                    <small>{errors.password?.type === 'pattern' && <span className="text-red-400">at least one uppercase letter, one lowercase letter, one special characte</span>}</small>
                                </div>
                      
                           

                            {/* login button */}
                            <div className="mt-6">
                                <button type="submit" className="disabled:bg-gray-200 w-full disabled:cursor-not-allowed px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg ">
                                    Login
                                </button>

                                <div className="mt-6 text-center ">
                                    <p className="text-sm ">Already have an account?
                                        <Link to='/sign-up' className="text-primary font-semibold"> SignUp</Link> </p>
                                </div>
                            </div>
                        </form>
                        <div 
                        onClick={handleBack}
                        className="hidden absolute -top-6 -right-4 bg-red-300 border-4 border-white  p-4 rounded-full hover:cursor-pointer">
                            <TfiClose className="text-sm font-bold "/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;