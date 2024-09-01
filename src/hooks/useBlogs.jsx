
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useBlogs = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allBlogs = [],refetch} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosSecure('/allBlog/related/api/get')
            return res.data
        }
    })
    return [allBlogs,refetch]
};

export default useBlogs;