import { useNavigate } from "react-router-dom";
import BlogCurd from "../blogCurd/BlogCurd";

import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import axios from "axios";


const ContentManagement = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [allBlogs, setAllBlogs] = useState([]);
    const [sortValue, setSortValue] = useState('')


    // get data by api
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allBlog/related/api/get?sort=${sortValue}`)
            setAllBlogs(data)
        }
        getData()
    }, [axiosSecure, sortValue])

    const handleBlog = () => {
        navigate('/dashboard/add-blog')
    }
    return (
        <div className="mt-20 lg:mt-0">
            <h1 className="text-lg md:text-2xl text-secondery font-bold text-center py-10 md:py-5  uppercase">Content Management volunteer</h1>
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

           <div className="lg:px-4 mt-8">
             {/* all blog curd here.... */}
             <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 px-4 ">
                {
                    allBlogs.map((blog, idx) => {
                        return (
                            <BlogCurd key={idx} blog={blog} />
                        )
                    })
                }
            </div>
           </div>
        </div>
    );
};

export default ContentManagement;