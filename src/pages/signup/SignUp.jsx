
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";
import { TfiClose } from "react-icons/tfi";
// component(get data)
import districts from "../../components/district.json"
import upazilas from "../../components/upazila.json"
const SignUp = () => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors },} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [selectedDistrict, setSelectedDistrict] = useState();
    const [selectedUpazilas, setSelectedUpazilas] = useState([]);

    const onSubmit = (data) => {
      console.log(data);
      const password = data.password;
      const confirmPassword = data.confirm_password;



    // password validation
    // showConfirmPassword('')
      if((password === confirmPassword) && (password.length === confirmPassword.length)){
        setShowConfirmPassword("")
        
      }
      else{
        setShowConfirmPassword("confirm_password doesn't match")
      
      }
    }



    // handle select district
    const handleSelectDistrict = (e) => {
        const selectedValue = e.target.value;
        setSelectedDistrict(selectedValue);
    };

    useEffect(() => {
        const findDistrict = districts.find(district => district?.name === selectedDistrict);
        console.log(findDistrict);

        // Filter upzaila based select destrict
        const filteredUpazilas = upazilas.filter(upazila => upazila?.district_id === findDistrict?.id);
        setSelectedUpazilas(filteredUpazilas);

    }, [selectedDistrict]);

    // blood group data create
    const blooGroup = [' A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
   
    // handle back
    const handleBack = () =>{
        navigate(-1)
    }
    return (
        // <div>
        //     <Navbar />

        //     <div className="flex flex-col md:flex-row justify-between my-14 w-[94%] lg:max-w-6xl mx-auto">
        //         <img className="w-full md:w-[35%]" src="https://i.ibb.co/gw8szCN/humans-2.png" alt="" />
        //         <div className="w-full md:w-[65%]">
        //             <h2 className="mb-8 text-center text-6xl text-[#ff0000] font-bold font-poetsen">Register Now!</h2>
        //             <div className="card shrink-0 w-full lg:w-[80%] mx-auto shadow-2xl bg-[#ffd3cb]">
        //                 <form className="card-body space-y-4" onSubmit={handleSubmit(onSubmit)}>
        //                     <div className="flex flex-col md:flex-row justify-between gap-4">

        //                         <div className="form-control w-full md:w-1/2">
        //                             <label className="label">
        //                                 <span className="label-text text-black font-bold text-base">Name</span>
        //                             </label>
        //                             <input type="text" placeholder="Your name" className="input input-bordered" {...register('name', { required: true })} />
        //                             {errors.name && <span className="text-red-600">Name is required</span>}
        //                         </div>
        //                         <div className="form-control w-full md:w-1/2">
        //                             <label className="label">
        //                                 <span className="label-text text-black font-bold text-base">Email</span>
        //                             </label>
        //                             <input type="email" placeholder="email" className="input input-bordered" {...register('email', { required: true })} />
        //                             {errors.email && <span className="text-red-600">Email is required</span>}
        //                         </div>
        //                     </div>

        //                     {/* division for */}
        //                     <div className="flex flex-col md:flex-row justify-between gap-4">
        //                         <div className="form-control w-full md:w-1/2">
        //                             <label className="mb-2 font-bold text-base text-black" htmlFor="division">Division</label>
        //                             <select
        //                                 {...register('division', { required: true })}
        //                                 value={selectedDivision}
        //                                 onChange={handleDivisionChange}
        //                                 id="division"
        //                                 className="p-2 rounded-lg"
        //                             >
        //                                 {allDivision.map((item, index) => (
        //                                     <option key={index} value={item.name}>{item.name}</option>
        //                                 ))}
        //                             </select>
        //                             {errors.division && <span className="text-red-600">Division is required</span>}
        //                         </div>

        //                         {/* district for */}
        //                         <div className="form-control w-full md:w-1/2">
        //                             <label className="mb-2 font-bold text-base text-black" htmlFor="district">District</label>
        //                             <select
        //                                 {...register('district', { required: true })}
        //                                 onChange={handleDistrictChange}
        //                                 id="district"
        //                                 className="p-2 rounded-lg">
        //                                 <option value="" disabled>Select district</option>
        //                                 {allDistricts.map((district, index) => (
        //                                     <option key={index} value={district}>{district}</option>
        //                                 ))}
        //                             </select>
        //                             {errors.district && <span className="text-red-600">District is required</span>}
        //                         </div>
        //                     </div>

        //                     {/* upziala for */}
        //                     <div className="flex flex-col md:flex-row justify-between gap-4">
        //                         <div className="form-control w-full md:w-1/2">
        //                             <label className="mb-2 font-bold text-base text-black" htmlFor="upazila">Upazila</label>
        //                             <select

        //                                 {...register('upazila', { required: true })}
        //                                 id="upazila"
        //                                 className="p-2 rounded-lg">
        //                                 <option value="" disabled>Select district than upazila</option>
        //                                 {expectedUpazilas.map((upazila, index) => (
        //                                     <option key={index} value={upazila}>{upazila}</option>
        //                                 ))}
        //                             </select>
        //                             {errors.upazila && <span className="text-red-600">Upazila is required</span>}
        //                         </div>
        //                         <div className="form-control w-full md:w-1/2">
        //                             <label className="mb-2 font-bold text-base text-black" htmlFor="district">Blood Group</label>
        //                             <select
        //                                 {...register('blood', { required: true })}
        //                                 id="blood"
        //                                 className="p-2 rounded-lg">
        //                                 <option value="" disabled>select blood group</option>
        //                                 <option value="A+">A+</option>
        //                                 <option value="A-">A-</option>
        //                                 <option value="B+">B+</option>
        //                                 <option value="B-">B-</option>
        //                                 <option value="AB+">AB+</option>
        //                                 <option value="AB-">AB-</option>
        //                                 <option value="O+">O+</option>
        //                                 <option value="O-">O-</option>
        //                             </select>
        //                             {errors.blood && <span className="text-red-600">Blood group is required</span>}
        //                         </div>
        //                     </div>












        //                     <div className="flex flex-col md:flex-row justify-between gap-4">
        //                         <div className="form-control w-full md:w-1/2 relative">
        //                             <label className="label">
        //                                 <span className="label-text text-black font-bold text-base">Password</span>
        //                             </label>
        //                             <input
        //                                 type={showPassword ? "text" : "password"} placeholder="password"
        //                                 className="input input-bordered"
        //                                 {...register('password', { required: true })} />
        //                             <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute right-4 bottom-4 text-xl">
        //                                 {
        //                                     showPassword ? <IoEyeOff /> : <IoEye />
        //                                 }
        //                             </span>
        //                             <button className="">{ }</button>
        //                             {errors.password && <span className="text-red-600">Password is required</span>}
        //                         </div>
        //                         <div className="form-control w-full md:w-1/2 relative">
        //                             <label className="label">
        //                                 <span className="label-text text-black font-bold text-base">Confirm Password</span>
        //                             </label>
        //                             <input
        //                                 type={showPassword ? "text" : "password"}
        //                                 placeholder="confirm password" className="input input-bordered"
        //                                 {...register('confirm_password', { required: true })} />
        //                             <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute right-4 bottom-4 text-xl">
        //                                 {
        //                                     showPassword ? <IoEyeOff /> : <IoEye />
        //                                 }
        //                             </span>
        //                             {errors.confirm_password && <span className="text-red-600">Confirm password is required</span>}
        //                         </div>
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="mb-2 font-bold text-base text-black" htmlFor="">Your Profile</label>
        //                         <input type="file" className="file-input w-full max-w-xs" {...register('profile', { required: true })} />
        //                         {errors.profile && <span className="text-red-600">Profile picture is required</span>}
        //                     </div>
        //                     <div className="form-control mt-6">
        //                         <button className="btn bg-white font-bold text-black">Register</button>
        //                     </div>
        //                     {
        //                         registerError && <p className="text-red-500 font-semibold text-center">{registerError}</p>
        //                     }
        //                     <p className="mt-6">Already have an account? <Link className="text-green-500 font-bold" to='/login'>Login Now</Link>
        //                     </p>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            <Navbar />
            <section className="">
                <div className="flex items-center justify-center min-h-screen px-6 ">
                    <div className="relative  w-full max-w-2xl bg-primaryGray shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8 rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="">
                                <h2 className=" pb-4 font-medium text-center text-gray-800 capitalize border-blue-500 dark:border-blue-400 dark:text-white">Please Sign Up</h2>
                            </div>

                            {/* ********* input filed start ******* */}
                            <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                                {/* user name */}
                                {/* <div className="w-full md:w-1/2 mt-3 md:mt-6">
                                    <label htmlFor="blood_group" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your name
                                    </label>
                                    <div>
                                        <input
                                            type="name"
                                            name="name"
                                            {...register("name", { required: true })}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Name" />
                                    </div>
                                </div> */}

                                {/* user email */}
                                {/* <div className="w-full md:w-1/2 mt-3 md:mt-6">
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
                                </div> */}
                            </div>


                            <div className="flex flex-col md:flex-row gap-0 md:gap-4">

                                {/* <div className="w-full md:w-1/2 mt-3 md:mt-6">
                                    <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your district
                                    </label>
                                    <div>
                                        <select
                                            name='district'
                                            {...register("district", { required: true })}
                                            onChange={(e) => handleSelectDistrict(e)}
                                            defaultValue={'choose_district'}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                            <option disabled value={'choose_district'}>Choose your district</option>
                                            {
                                                districts.map(district => <option key={district?.id} value={district?.name}>{district?.name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div> */}

                                {/* <div className="w-full md:w-1/2 mt-3 md:mt-6">
                                    <label htmlFor="upazila" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your upazila
                                    </label>
                                    <div>
                                        <select
                                            name='upazila'
                                            {...register("upazila", { required: true })}
                                            defaultValue={'choose_upazila'}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                            <option disabled value={'choose_upazila'}>Choose your upazila</option>
                                            {
                                                selectedUpazilas?.map((upazila, i) => <option key={i} value={upazila?.name}>{upazila?.name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div> */}
                            </div>



                            <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                                {/* user photo url */}
                                {/* <div className="w-full md:w-1/2 mt-3 md:mt-6">
                                    <label htmlFor="photoURL" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your photoURL
                                    </label>

                                    <div>
                                        <input type="photoURL" name="photo" className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="photo URL"  {...register("photo", { required: true })} />
                                    </div>
                                </div> */}



                                {/* <div className="w-full md:w-1/2 mt-3 md:mt-6">
                                    <label htmlFor="blood_group" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your blood group
                                    </label>
                                    <div>
                                        <select
                                            name='blood_group'
                                            {...register("blood_group", { required: true })}
                                            defaultValue={'choose_blood'}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                            <option disabled value={'choose_blood'}>Choose your blood group</option>
                                            {
                                                blooGroup.map((group, i) => <option key={i} value={group}>{group}</option>)
                                            }
                                        </select>
                                    </div>
                                </div> */}
                            </div>

                            <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                                {/* password */}
                                <div className="relative w-full md:w-1/2 mt-3 md:mt-6">
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

                                {/* confirm_password */}
                                <div className="relative w-full md:w-1/2 mt-3 md:mt-6">
                                    <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your confirm_password
                                    </label>
                                    <div>
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="confirm_password" {...register("confirm_password",
                                                {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
                                                })}
                                            className="block w-full pl-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="confirm_password" />
                                        {/* eye icon setup */}
                                        <p className="absolute top-10 right-3 cursor-pointer"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                            {showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                        </p>
                                    </div>
                                    <small>{errors.confirm_password?.type === 'require' && <span className="text-red-400">confirm_password is required</span>}</small>
                                    <small>{errors.confirm_password?.type === 'minLength' && <span className="text-red-400">confirm_password must be 6 Carecter</span>}</small>
                                    <small>{errors.confirm_password?.type === 'maxLength' && <span className="text-red-400">confirm_password less then 20 Carecter</span>}</small>
                                    <small>{errors.confirm_password?.type === 'pattern' && <span className="text-red-400">at least one uppercase letter, one lowercase letter, one special characte</span>}</small>
                                    {showConfirmPassword && <p className='text-red-600'>{showConfirmPassword}</p>}
                                </div>
                            </div>

                            {/* signup button */}
                            <div className="mt-6">
                                <button type="submit" className="disabled:bg-gray-200 w-full disabled:cursor-not-allowed px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg ">
                                    SignUp
                                </button>

                                <div className="mt-6 text-center ">
                                    <p className="text-sm ">Do not have an account?
                                        <Link to='/login' className="text-primary font-semibold"> Login</Link> </p>
                                </div>
                            </div>
                        </form>
                        <div
                            onClick={handleBack}
                            className="hidden absolute -top-6 -right-4 bg-red-300 border-4 border-white  p-4 rounded-full hover:cursor-pointer">
                            <TfiClose className="text-sm font-bold" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;
