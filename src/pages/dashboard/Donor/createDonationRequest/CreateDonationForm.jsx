import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

// component(get data)
import districts from "../../../../components/district.json"
import upazilas from "../../../../components/upazila.json"
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CreateDonationForm = () => {
    const { user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
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

        //  user information
        const donorInfo = {
            status: 'pending',
            requesterName: data.requester_name,
            requesterEmail: data.requester_email,
            recipientName: data.recipient_name,
            hospitalName: data.hospital_name,
            district: data.district,
            upazila: data.upazila,
            donationDate: data.donation_date,
            donationTime: data.donation_time,
            fullAddress: data.full_address,
            bloodGroup: data.blood_group,
            description: data.request_message,
        }

        // post request here.....

        try {
            const { data: donationRequestData } = await axiosSecure.post('/donor/donation/request/api/create', donorInfo)
            console.log(donationRequestData);
            toast.success('Donation create successfully');
            navigate('/dashboard/my-donation-request')
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="relative w-full max-w-4xl mx-auto bg-primaryGray shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-8 rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* ********* input filed start ******* */}
                <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                    {/* requester name */}
                    <div className="w-full md:w-1/2 mt-3 md:mt-6">
                        <label htmlFor="requester_name" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                            Requester name
                        </label>
                        <div>
                            <input
                                type="name"
                                name="requester_name"
                                defaultValue={user?.displayName}
                                readOnly={user?.displayName}
                                {...register("requester_name", { required: true })}
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="requester Name" />
                        </div>
                    </div>

                    {/* requester email */}
                    <div className="w-full md:w-1/2 mt-3 md:mt-6">
                        <label htmlFor="requester_email" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                            Requester Email
                        </label>

                        <div>
                            <input
                                type="email"
                                name="requester_email"
                                defaultValue={user?.email}
                                readOnly={user?.email}
                                {...register("requester_email", { required: true })}
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                    {/* recipient name */}
                    <div className="w-full md:w-1/2 mt-3 md:mt-6">
                        <label htmlFor="recipient_name" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                            Recipient name
                        </label>
                        <div>
                            <input
                                type="name"
                                name="recipient_name"
                                {...register("recipient_name", { required: true })}
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Recipient Name" />
                        </div>
                    </div>
                    {/* hospital name */}
                    <div className="w-full md:w-1/2 mt-3 md:mt-6">
                        <label htmlFor="hospital_name" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                            Hospital name
                        </label>
                        <div>
                            <input
                                type="name"
                                name="hospital_name"
                                {...register("hospital_name", { required: true })}
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Hospital Name" />
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
                    {/* donation date */}
                    <div className="w-full md:w-1/2 mt-3 md:mt-6">
                        <label htmlFor="donation_date" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                            Donation Date
                        </label>
                        <div>
                            <input
                                type="date"
                                name="donation_date"
                                {...register("donation_date", { required: true })}
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Donation Date" />
                        </div>
                    </div>
                    {/* donation time */}
                    <div className="w-full md:w-1/2 mt-3 md:mt-6">
                        <label htmlFor="donation_time" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                            Donation Time
                        </label>
                        <div>
                            <input
                                type="time"
                                name="donation_time"
                                {...register("donation_time", { required: true })}
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Donation Time" />
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                    {/* full address */}
                    <div className="w-full md:w-1/2 mt-3 md:mt-6">
                        <label htmlFor="full_address" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                            Full Address
                        </label>
                        <div>
                            <input
                                type="name"
                                name="full_address"
                                {...register("full_address", { required: true })}
                                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Full Address" />
                        </div>
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

                {/* request message */}
                <div className="mt-3 md:mt-6">
                    <label htmlFor="request_message" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                        Request Message
                    </label>
                    <textarea
                        name="request_message"
                        {...register("request_message", { required: true })}
                        className='resize-none w-full px-4 py-2 md:py-6 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring' placeholder="Request Message..." />
                </div>

                {/*  */}
                <div className="flex justify-center md:justify-end py-4 md:py-6">
                    <button type="submit" className="disabled:bg-gray-200  disabled:cursor-not-allowed p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg ">
                        Request Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateDonationForm;