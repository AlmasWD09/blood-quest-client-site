
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import districts from "../../../../components/district.json"
import upazilas from "../../../../components/upazila.json"
import useProfileData from "../../../../hooks/useProfileData";
import useRole from "../../../../hooks/useRole";
import LoadindSpenier from "../../../../components/LoadindSpenier";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UserProfile = () => {
    const [profileData] = useProfileData();
    const [role] = useRole();

    const axiosSecure = useAxiosSecure();
    const { user, loading } = useAuth();
    const { register, handleSubmit,} = useForm();
    const [defaultData, setDefaultData] = useState(false);
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

    const onSubmit = async (data) => {
        
        const userInfoUpdate = {
            name: data.name,
            email: data.email,
            blood_group: data.blood_group,
            district: data.district,
            upazila: data.upazila,
            Date: new Date(),
        }
        const response = await axiosSecure.put(`/userProfile/update/api/${user?.email}`, userInfoUpdate);
        if (response.data.modifiedCount > 0) {
            toast.success('update successfully')
            setDefaultData(false)
        }
    };






    const handleProfileEdit = () => {
        setDefaultData(true
        )
    }

    if (loading) return <LoadindSpenier />
    return (
        <>
            <section className="">
                <div className=" flex items-center justify-center min-h-screen px-6 ">
                    <div className="relative bg-primaryGray w-full max-w-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8 rounded-lg">
                        <div className="flex justify-between">
                            <button className="bg-primary text-white px-4 py-1 uppercase rounded-md">{role}</button>
                   {
                    !defaultData ?          <button
                    onClick={handleProfileEdit}
                    className="bg-primary text-white px-4 py-1 uppercase rounded-md">Edit</button> : ''
                   }
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="w-full  -top-8  flex justify-center pt-3 md:pt-0">
                                <img className="object-cover w-24 h-24 rounded-full" src={user?.photoURL} alt="" />
                            </div>
                            {/* user name */}
                            <div className="w-full mt-6">
                                <label htmlFor="blood_group" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                    Your name
                                </label>
                                <div>
                                    <input
                                        type="name"
                                        name="name"
                                        defaultValue={user?.displayName}
                                        readOnly={!defaultData}
                                        {...register("name", { required: true })}
                                        className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Name" />
                                </div>
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
                                        defaultValue={user?.email}
                                        readOnly={!defaultData}
                                        {...register("email", { required: true })}
                                        className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                                </div>
                            </div>

                            {/* user district */}
                            <div className="w-full mt-6">
                                <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                    Your district
                                </label>
                                <div>
                                    {
                                        !defaultData ? (
                                            <input
                                                id="district"
                                                name="district"
                                                type="text"
                                                readOnly
                                                value={profileData?.district}
                                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        ) : (<select
                                            name='district'
                                            {...register("district", { required: true })}
                                            onChange={(e) => handleSelectDistrict(e)}
                                            defaultValue={profileData?.district}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                            <option disabled value={'choose_district'}>Choose your district</option>
                                            {
                                                districts.map(district => <option key={district?.id} value={district?.name}>{district?.name}</option>)
                                            }
                                        </select>)
                                    }

                                </div>
                            </div>

                            {/* user upazila */}
                            <div className="w-full mt-6">
                                <label htmlFor="upazila" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                    Your upazila
                                </label>
                                <div>
                                    {
                                        !defaultData ? (
                                            <input
                                                id="upazila"
                                                name="upazila"
                                                type="text"
                                                readOnly
                                                value={profileData?.upazila}
                                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        ) : (<select
                                            name='upazila'
                                            {...register("upazila")}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                            <option disabled value={'choose_upazila'}>Choose your upazila</option>
                                            {
                                                selectedUpazilas?.map((upazila, i) => <option key={i} value={upazila?.name}>{upazila?.name}</option>)
                                            }
                                        </select>)
                                    }
                                </div>
                            </div>

                            {/* blood group */}
                            <div className="w-full mt-6">
                                <label htmlFor="blood_group" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                    Your blood group
                                </label>
                                <div>
                                    {
                                        !defaultData ? (
                                            <input
                                                id="blood_group"
                                                name="blood_group"
                                                type="text"
                                                readOnly
                                                value={profileData?.blood_group}
                                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                            />
                                        ) : (
                                            <select
                                                name='blood_group'
                                                {...register("blood_group", { required: true })}
                                                defaultValue={profileData.blood_group}
                                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                                <option disabled value={'choose_blood'}>Choose your blood group</option>
                                                {
                                                    blooGroup.map((group, i) => <option key={i} value={group}>{group}</option>)
                                                }
                                            </select>
                                        )
                                    }
                                </div>
                            </div>
                            {
                                defaultData && <div className="flex justify-center md:justify-end py-4 md:py-6">
                                    <button
                                        type="submit" className="p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg ">
                                        Update Profile
                                    </button>
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserProfile;