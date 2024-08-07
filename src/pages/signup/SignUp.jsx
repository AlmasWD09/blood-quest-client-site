import { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../components/shared/navbar/Navbar";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm()


   






// blood-group for
const BlooGroup = [' A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];


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
                                <h2 className=" pb-4 font-medium text-center text-gray-800 capitalize border-blue-500 dark:border-blue-400 dark:text-white">Please SignUp</h2>
                            </div>



                            <div className="flex justify-between items-center gap-4">
                                {/* user name */}
                                <div className="relative w-full md:w-[50%] flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="User name"  {...register("name", { required: true })} />
                                </div>
                                <small>{errors.name && <span className="text-red-400">name is required</span>}</small>



                                {/* user email */}
                                <div className="relative w-full md:w-[50%] flex items-center mt-6">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>

                                    <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address"  {...register("email", { required: true })} />
                                </div>
                                <small>{errors.email && <span className="text-red-400">email is required</span>}</small>
                            </div>
                         


















                            <div className="flex justify-between items-center gap-4">
                         
                                <h1>upziala</h1>

                                {/* blood group*/}
                                <div className="relative w-full md:w-[50%] flex items-center mt-8">
                                    {/* <label className=" text-gray-700 dark:text-gray-200" >Experience</label> */}

                                    <select name="blood-group" 
                                     {...register('blood-group', { required: true })}

                                        className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        <option value="" disabled>Choose blood group</option>
                                        {
                                            BlooGroup.map((singleBloodGroup,idx)=>{
                                                return (
                                                    <option key={idx} value={singleBloodGroup}>{singleBloodGroup}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-between items-center gap-4">
                                <div className="relative w-full md:w-[50%] flex items-center">
                                    {/* user password */}
                                    <div className="relative flex items-center mt-4">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>


                                        <input 
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                         className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password"  {...register("password",
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
                                </div>


                                <div className="relative w-full md:w-[50%] flex items-center">
                                    {/* confirm password */}
                                    <div className="relative flex items-center mt-4">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>


                                        <input 
                                        id="confirm_password"
                                        name="confirm_password"
                                        type={showPassword ? "text" : "confirm_password"}
                                          className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="confirm_password"  {...register("confirm_password",
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
                                    <small>{errors.confirm_password?.type === 'require' && <span className="text-red-400">confirm_password is required</span>}</small>
                                    <small>{errors.confirm_password?.type === 'minLength' && <span className="text-red-400">confirm_password must be 6 Carecter</span>}</small>
                                    <small>{errors.confirm_password?.type === 'maxLength' && <span className="text-red-400">confirm_password less then 20 Carecter</span>}</small>
                                    <small>{errors.confirm_password?.type === 'pattern' && <span className="text-red-400">at least one uppercase letter, one lowercase letter, one special characte</span>}</small>
                                </div>
                            </div>


                            {/* user photo url */}
                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>

                                <input type="photoURL" name="photo" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="photo URL"  {...register("photo", { required: true })} />
                            </div>
                            <small>{errors.photo && <span className="text-red-400">photo is required</span>}</small>





                            <div className="mt-6">
                                <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign Up
                                </button>

                                <div className="mt-6 text-center ">
                                    <p className="text-sm ">{"Don't Have an account"}?
                                        <Link to='/login' className="text-primary font-semibold "> Login</Link> </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;