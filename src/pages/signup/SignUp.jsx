
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/navbar/Navbar";
import { TfiClose } from "react-icons/tfi";
// component(get data)
import districts from "../../components/district.json"
import upazilas from "../../components/upazila.json"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const SignUp = () => {
    const { creatUser, setUser, updateUser, } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [selectedDistrict, setSelectedDistrict] = useState();
    const [selectedUpazilas, setSelectedUpazilas] = useState([]);

    // handle select district
    const handleSelectDistrict = (e) => {
        const selectedValue = e.target.value;
        setSelectedDistrict(selectedValue);
    };

    useEffect(() => {
        const findDistrict = districts.find(district => district?.name === selectedDistrict);
        // Filter upzaila based select destrict
        const filteredUpazilas = upazilas.filter(upazila => upazila?.district_id === findDistrict?.id);
        setSelectedUpazilas(filteredUpazilas);

    }, [selectedDistrict]);

    // blood group data create
    const blooGroup = [' A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    // handle back
    const handleBack = () => {
        navigate(-1)
    }

    const onSubmit = async (data) => {
        console.log(data);
        const password = data.password;
        const confirmPassword = data.confirm_password;
        // password validation
        if ((password === confirmPassword) && (password.length === confirmPassword.length)) {
            setShowConfirmPassword("")

        }
        else {
            setShowConfirmPassword("confirm_password doesn't match")

        }

        //   user create
        creatUser(data.email, data.password)
            .then(result => {
                const loggendUser = result.user
                toast.success('User Created Successfully')
                //   navigate('/')

                // update profile
                updateUser(data.name, data.photo)
                setUser({ ...loggendUser, photoURL: data.photo, displayName: data.name })

            })


        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        
            // user information
            const userInfo = {
                role: 'donar',
                status: 'active',
                name: data.name,
                email: data.email,
                image:res.data.data.display_url,
                blood_group: data.blood_group,
                district: data.district,
                upazila: data.upazila,
                Date: new Date(),
            }

            // post request here.....

            const { response } = await axiosPublic.post('/users/api/create', userInfo)

            console.log(response);

    }

    return (

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
                                <div className="w-full md:w-1/2 mt-3 md:mt-6">
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
                                </div>

                                {/* user email */}
                                <div className="w-full md:w-1/2 mt-3 md:mt-6">
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
                            </div>


                            <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                                {/* user district */}
                                <div className="w-full md:w-1/2 mt-3 md:mt-6">
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
                                </div>

                                {/* user upazila */}
                                <div className="w-full md:w-1/2 mt-3 md:mt-6">
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
                                </div>
                            </div>



                            <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                                {/* user photo url */}
                                <div className="w-full md:w-1/2 mt-3 md:mt-6">
                                    {/* <label htmlFor="photoURL" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your photoURL
                                    </label>

                                    <div>
                                        <input type="photoURL" name="photo" className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="photo URL"  {...register("photo", { required: true })} />
                                    </div> */}
                                    <label htmlFor="image" className="block text-sm text-gray-500 dark:text-gray-300">Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        {...register("image", { required: true })}
                                        className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-primary dark:bg-gray-900 dark:focus:border-primary"
                                    />
                                </div>


                                {/* blood group */}
                                <div className="w-full md:w-1/2 mt-3 md:mt-6">
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
                                </div>
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
