import { useParams } from "react-router-dom";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useDonorSingleDataEdit = () => {
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();

    const { data: singleCategory = {},refetch } = useQuery({
        queryKey: ['donor-request-edit',id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donor/donation/request/api/get/${id}`);
            return res.data;
        }
    })
return [singleCategory,refetch]
}

export default useDonorSingleDataEdit;