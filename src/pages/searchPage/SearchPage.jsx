import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import districts from "../../components/district.json";
import upazilas from "../../components/upazila.json";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Container from "../../components/shared/Container";
import SearchRow from "../searchRow/SearchRow";
import useAuth from "../../hooks/useAuth";
import LoadindSpenier from "../../components/LoadindSpenier";

const SearchPage = () => {
    const { loading } = useAuth();
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazilas, setSelectedUpazilas] = useState([]);
    const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');
    const axiosPublic = useAxiosPublic();
    const [searchData, setSearchData] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    // handle select district
    const handleSelectDistrict = (e) => {
        const selectedValue = e.target.value;
        setSelectedDistrict(selectedValue);
    };

    useEffect(() => {
        const findDistrict = districts.find(district => district?.name === selectedDistrict);
        // Filter upazilas based on selected district
        const filteredUpazilas = upazilas.filter(upazila => upazila?.district_id === findDistrict?.id);
        setSelectedUpazilas(filteredUpazilas);
        setSelectedUpazila(''); // Reset upazila when district changes
    }, [selectedDistrict]);

    // blood group data create
    const bloodGroupOptions = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    const { register, handleSubmit, } = useForm();

    const onSubmit = async (data) => {
        const searchValue = {
            bloodGroup: data.blood_group,
            district: data.district,
            upazila: data.upazila
        }

        try {
            const response = await axiosPublic.get('/search-value/related/api/get', { params: searchValue });
            setSearchData(response.data);
            setIsSearched(true);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    }

    const isFormValid = selectedBloodGroup && selectedDistrict && selectedUpazila;

    if (loading) return <LoadindSpenier />;

    return (
        <>
            <Container>
                <div>
                    <div className="max-w-2xl mx-auto shadow-2xl bg-primaryGray bg-clicp p-8 pb-40 md:pb-28">
                        <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">Search Donation Request</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col md:flex-row gap-4">
                                {/* Blood group */}
                                <div>
                                    <label htmlFor="blood_group" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Select blood group
                                    </label>
                                    <div>
                                        <select
                                            name='blood_group'
                                            {...register("blood_group", { required: true })}
                                            value={selectedBloodGroup}
                                            onChange={(e) => setSelectedBloodGroup(e.target.value)}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                            <option disabled value=''>Choose your blood group</option>
                                            {
                                                bloodGroupOptions.map((group, i) => <option key={i} value={group}>{group}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                {/* District */}
                                <div>
                                    <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Select district
                                    </label>
                                    <div>
                                        <select
                                            name='district'
                                            {...register("district", { required: true })}
                                            value={selectedDistrict}
                                            onChange={(e) => handleSelectDistrict(e)}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                            <option disabled value=''>Choose your district</option>
                                            {
                                                districts.map(district => <option key={district?.id} value={district?.name}>{district?.name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                {/* Upazila */}
                                <div>
                                    <label htmlFor="upazila" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Select upazila
                                    </label>
                                    <div>
                                        <select
                                            name='upazila'
                                            {...register("upazila", { required: true })}
                                            value={selectedUpazila}
                                            onChange={(e) => setSelectedUpazila(e.target.value)}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                            <option disabled value=''>Choose your upazila</option>
                                            {
                                                selectedUpazilas.map((upazila, i) => <option key={i} value={upazila?.name}>{upazila?.name}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Search button */}
                            <div className="w-full flex justify-center py-5">
                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    className={`${!isFormValid ? 'bg-gray-200 cursor-not-allowed rounded-lg p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform' : 'bg-primary rounded-lg p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform'}`}
                                >
                                    Search Now
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Conditional rendering based on search results */}
                    <div className="mt-6">
                        {isSearched && (
                            searchData.length > 0 ? (
                                <div className="">
                                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                            <table className="min-w-full leading-normal">
                                                <thead>
                                                    <tr>
                                                        <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                            SERIAL NO
                                                        </th>
                                                        <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                            RECIPIENT NAME
                                                        </th>
                                                        <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                            RECIPIENT LOCATION
                                                        </th>
                                                        <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                            DONATION DATE
                                                        </th>
                                                        <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                            DONATION TIME
                                                        </th>
                                                        <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                                            <button>See Details</button>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {searchData.map((category, idx) => (
                                                        <tr key={idx}>
                                                            <SearchRow category={category} serial={idx + 1} />
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-primaryGray min-h-[450px] md:flex flex-col justify-center items-center hidden">
                                    <p className="text-center text-red-500 font-bold text-2xl">No Data Found</p>
                                    <p>Does not match search value</p>
                                    <p>Please check navbar donation request view details page</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SearchPage;
