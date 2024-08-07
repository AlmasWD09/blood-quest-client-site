import { useState } from "react";
import Navbar from "../../components/shared/navbar/Navbar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm()


    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <Navbar />
            <section>
                <div className="h-screen flex justify-center items-center px-20">
           
                    {/* signup form */}
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-gray-200 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8 rounded-lg">
                            <div className="">
                                <h2 className=" pb-4 font-medium text-center text-gray-800 capitalize border-blue-500 dark:border-blue-400 dark:text-white">Please Login</h2>
                            </div>

                            {/* user email */}
                            <div className="relative w-full flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"  {...register("email", { required: true })} />
                            </div>
                            <small>{errors.email && <span className="text-red-400">email is required</span>}</small>

                            {/* user password */}
                            <div className="relative flex items-center mt-4">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>

                                <input type={showPassword ? "text" : "password"} name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"  {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
                                    })} />

                                {/* eye icon setup */}
                                <p className="absolute top-6 right-3 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                </p>
                            </div>
                            <small>{errors.password?.type === 'require' && <span className="text-red-400">password is required</span>}</small>
                            <small>{errors.password?.type === 'minLength' && <span className="text-red-400">password must be 6 Carecter</span>}</small>
                            <small>{errors.password?.type === 'maxLength' && <span className="text-red-400">password less then 20 Carecter</span>}</small>
                            <small>{errors.password?.type === 'pattern' && <span className="text-red-400">at least one uppercase letter, one lowercase letter, one special characte</span>}</small>



                            <div className="mt-6">
                                <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Login
                                </button>

                                <div className="mt-6 text-center ">
                                    <p className="text-sm ">{"Don't Have an account"}?
                                        <Link to='/signup' className="text-primary font-semibold "> SignuP</Link> </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;