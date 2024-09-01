import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import BlogCurd from "../blogCurd/BlogCurd";
import { useState } from "react";


const ContentManagement = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [sortValue, setSortValue] = useState('')


    const handleBlog = () => {
        navigate('/dashboard/add-blog')
    }

    const { data: allBlogs = [],refetch} = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosSecure('/allBlog/related/api/get')
            return res.data
        }
    })

    return (
        <div>
            <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">Content Management volunteer</h1>
            <div className="flex justify-center gap-6">
                <button
                    onClick={handleBlog}
                    className="bg-sky-600 p-2 rounded-md text-white">Add Blog</button>

                {/* sort by blog */}
                <select
                    onChange={(e) => setSortValue(e.target.value)}
                    defaultValue={'sort_by_blog'}
                    className="select select-info  bg-green-800 p-2 rounded-md text-white">
                    <option disabled value="sort_by_blog">Sort By Blog</option>
                    <option value="draft">draft</option>
                    <option value="published">published</option>
                </select>

            </div>
            {/* all blog curd here.... */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-16">
                {
                    allBlogs.map((blog, idx) => {
                        return (
                            <BlogCurd key={idx} blog={blog} refetch={refetch}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ContentManagement;