import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";


const useRole = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data: role = '', refetch } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/role/api/get/${user.email}`);
            return res.data.role
        }
    })
    return [role, refetch]
};

export default useRole;
