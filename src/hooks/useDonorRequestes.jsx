import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useDonorRequestes = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: donorRequestes = [], refetch } = useQuery({
        queryKey: ['donor-request', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donor/donation/request/api/get/${user.email}`);
            return res.data;
        }
    })
return [donorRequestes,refetch]
};

export default useDonorRequestes;