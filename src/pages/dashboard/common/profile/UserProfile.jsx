
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import districts from "../../../../components/district.json"
import upazilas from "../../../../components/upazila.json"
import useProfileData from "../../../../hooks/useProfileData";


const UserProfile = () => {
    const [profileData] = useProfileData();


    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, } = useForm();
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
        console.log(data);

    }

    return (
        <>
            <section className="">
                <div className="flex items-center justify-center min-h-screen px-6 ">
                    <div className="relative bg-primaryGray w-full max-w-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8 rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="">
                                <h2 className=" pb-4 text-2xl font-medium text-center text-gray-800 capitalize border-blue-500 ">Profile</h2>
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
                                        readOnly={user?.displayName}
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
                                        readOnly={user?.email}
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
                                    <input
                                        id="district"
                                        name="district"
                                        type="text"
                                        readOnly
                                        value={profileData?.district}
                                        className={`${defaultData && 'hidden'}block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                                    />

                                    {
                                        defaultData && (
                                            <select
                                                name='district'
                                                {...register("district", { required: true })}
                                                onChange={(e) => handleSelectDistrict(e)}
                                                defaultValue={profileData?.district}
                                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                                <option disabled value={'choose_district'}>Choose your district</option>
                                                {
                                                    districts.map(district => <option key={district?.id} value={district?.name}>{district?.name}</option>)
                                                }
                                            </select>
                                        )
                                    }
                                </div>
                            </div>

                            {/* user upazila */}
                            <div className="w-full mt-6">
                                <label htmlFor="upazila" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                    Your upazila
                                </label>
                                <div>
                                    <input
                                        id="upazila"
                                        name="upazila"
                                        type="text"
                                        readOnly
                                        value={profileData?.upazila}
                                        className={`${defaultData && 'hidden'}block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                                    />
                                    {
                                        defaultData && (
                                            <select
                                                name='upazila'
                                                {...register("upazila", { required: true })}
                                                defaultValue={profileData?.upazila}
                                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                                <option disabled value={'choose_upazila'}>Choose your upazila</option>
                                                <option disabled value={'user?.upazila'}>{user?.upazila}</option>
                                                {
                                                    selectedUpazilas?.map((upazila, i) => <option key={i} value={upazila?.name}>{upazila?.name}</option>)
                                                }
                                            </select>
                                        )
                                    }
                                </div>
                            </div>

                            {/* blood group */}
                            <div className="w-full mt-6">
                                <label htmlFor="blood_group" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                    Your blood group
                                </label>
                                <div>
                                <input
                                        id="blood_group"
                                        name="blood_group"
                                        type="text"
                                        readOnly
                                        value={profileData?.blood_group}
                                        className={`${defaultData && 'hidden'}block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                                    />
                                   {
                                    defaultData && (
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
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserProfile;