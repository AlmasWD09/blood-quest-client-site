import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import districts from "../../components/district.json"
import upazilas from "../../components/upazila.json"
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SearchPage = () => {

    const [selectedDistrict, setSelectedDistrict] = useState();
    const [selectedUpazilas, setSelectedUpazilas] = useState([]);
    const axiosPublic = useAxiosPublic();


   

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



    const { register, handleSubmit, formState: { errors }, } = useForm();
    
    const onSubmit = async (data) => {
       const searchValue = {
        blood_group: data.blood_group,
        district: data.district,
        upazila: data.upazila
       }
     
       const response = await axiosPublic.get('/search-value/related/api/get', {params: searchValue});

    }

   
    return (
        <div>

            <div className="max-w-2xl mx-auto shadow-2xl bg-primaryGray bg-clicp p-8 pb-40 md:pb-28">
            <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">Search Donation Request</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* blood group */}
                        <div className="">
                            <label htmlFor="blood_group" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                            Select blood group
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

                        {/* user district */}
                        <div className="">
                            <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                Select district
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
                        <div className="">
                            <label htmlFor="upazila" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                            Select upazila
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
                        {/* search button here.. */}
                        <div className="w-full flex justify-center py-5">
                            <button type="submit" className="disabled:bg-gray-200  disabled:cursor-not-allowed p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg ">Search Now</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default SearchPage;