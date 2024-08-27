import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import BlogCurd from "../blogCurd/BlogCurd";


const ContentManagement = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const handleBlog = () =>{
        navigate('/dashboard/add-blog')
    }

    const {data:allBlogs=[],} = useQuery({
        queryKey:['blogs'],
        queryFn: async()=>{
            const res = await axiosSecure('/allBlog/related/api/get')
            return  res.data
        }
    })

    return (
        <div>
            <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">Content Management volunteer</h1>
            <div className="flex justify-center gap-6">
                <button 
                onClick={handleBlog}
                className="bg-primary p-2 rounded-md text-white">Add Blog</button>
                <button className="bg-green-800 p-2 rounded-md text-white hover:bg-green-600">Sort By Blog</button>
            </div>
            {/* all blog curd here.... */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-16">
        {
            allBlogs.map((blog,idx) =>{
                return (
                    <BlogCurd key={idx} blog={blog}/>
                )
            })
        }
            </div>
        </div>
    );
};

export default ContentManagement;