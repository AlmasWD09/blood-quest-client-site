import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRecentDonorRequest = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const { data: recentDonorRequestes = [],refetch,isPending } = useQuery({
        queryKey: ['recent-donor-request', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/recent/donation/request/api/get/${user?.email}`);
            return res.data;
        }
    })
return [recentDonorRequestes,refetch,isPending]
}

export default useRecentDonorRequest;