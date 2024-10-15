import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useRole from '../../../../hooks/useRole';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { CiCalendarDate } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { TbTrashXFilled } from "react-icons/tb";

const BlogCurd = ({ blog, refetch }) => {
    const [role] = useRole();
    const axiosSecure = useAxiosSecure();
    const { _id, image, title, status, content, postDate } = blog || {};
    const dateString = postDate;

    // Convert to Date object
    const datee = new Date(dateString);

    // Extract the date part in ISO 8601 format (YYYY-MM-DD)
    const ConvertDate = datee.toISOString().slice(0, 10);

    const navigate = useNavigate();

    // delete blog for..
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `${title} is deleted to the menu.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/blog/releted/api/delete/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    // update blog for..
    const handleUpdate = (id) => {
        navigate(`/dashboard/update-blog/${id}`)
    }

    // status change
    const handleStatusChange = async (id, value) => {
        try {
            const res = await axiosSecure.patch(`/blog/related/api/update/status/${id}`, { status: value })
            console.log(res.data);
            refetch()
            toast.success('Status change successfully')
        }
        catch (error) {
            toast.error(error)
        }

    }

    // Method 1: Using regex
    const convertedContent = content.replace(/<[^>]*>/g, '');
    return (
        <>
            <div className='relative flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl md:min-h-52 hover:bg-gray-100'>
                <div className='relative'>
                    <img className='object-cover w-full rounded-t-lg h-full lg:w-96 md:rounded-none md:rounded-s-lg' src={image} alt="" />
                    <span className='absolute bg-primary text-white z-10 px-2 flex justify-center items-center top-0 rounded-l-md'>{status}</span>
                </div>

                <div className='p-4 space-y-2'>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <small className="text-primary font-semibold flex items-center gap-1"><CiCalendarDate className="text-xl" />{ConvertDate}</small>
                    {
                        convertedContent?.length > 70 ? <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{convertedContent.slice(0, 70)} <span className="text-primary semifont-bold cursor-pointer">More...</span></p>
                            :
                            <p>{convertedContent}</p>
                    }
                    <div className='flex justify-between'>
                        {
                            role === 'volunteer' && <div className=''>
                                {
                                    status === 'draft' ? <button className=' bg-primary text-white px-2 mt-2 rounded cursor-not-allowed'>{status === 'draft' ? 'Publish' : 'UnPublish'}</button>
                                        :
                                        <button className=' bg-green-500 text-white px-2 mt-2 rounded cursor-not-allowed'>{status === 'draft' ? 'Publish' : 'UnPublish'}</button>
                                }
                            </div>
                        }

                        {
                            role === 'admin' && <div className=''>
                                {
                                    status === 'draft' ? <button
                                        onClick={() => handleStatusChange(_id, status)}
                                        className=' bg-primary text-white px-2 mt-2 rounded '>{status === 'draft' ? 'Publish' : 'UnPublish'}</button>
                                        :
                                        <button
                                            onClick={() => handleStatusChange(_id, status)}
                                            className=' bg-green-500 text-white px-2 mt-2 rounded '>{status === 'draft' ? 'Publish' : 'UnPublish'}</button>
                                }
                            </div>
                        }
                        <div className='flex flex-col gap-2 cursor-pointer'>
                            <span
                                onClick={() => handleUpdate(_id)}
                                className=''><FiEdit className='text-2xl text-green-600' /></span>
                            <span
                                onClick={() => handleDelete(_id)}
                                className=''><TbTrashXFilled className='text-2xl text-red-500' /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
// props-type validation
BlogCurd.propTypes = {
    blog: PropTypes.object,
    refetch: PropTypes.func,
};
export default BlogCurd;