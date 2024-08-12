import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import AllUserRow from "./AllUserRow";



const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
 


    // all users data get by mongoDB
    const { data: Allusers = [],  } = useQuery({
        queryKey: ['all-user',],
        queryFn: async () => {
            const res = await axiosSecure.get('/users/related/api/get');
            return res.data;
        }
    })


    return (
        <div>
              <div className="text-center mt-10">
                <h1 className="text-5xl font-semibold text-green-500">All Users</h1>
                <div className="flex justify-center gap-4 pt-8">
                    <button className="bg-gray-200 px-6 py-1 rounded">active</button>
                    <button className="bg-gray-200 px-6 py-1 rounded">blocked</button>
                </div>
            </div>
            {/* donation request table */}
            <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        IMAGE
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        EMAIL
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        NAME
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        ROLE
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        STATUS
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        MANAGE ACTIVITY
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        USER ROLE CHANGE
                                    </th>
                                </tr>
                            </thead>
                            {/* dynamic data for......... */}
                            <tbody>
                                {
                                    Allusers.map((singleUser, idx) => <tr key={idx}>
                                        <AllUserRow singleUser={singleUser} 
                                        />

                                    </tr>)}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;