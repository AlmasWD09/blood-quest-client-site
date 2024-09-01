import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useRole from '../../../../hooks/useRole';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const BlogCurd = ({ blog, refetch }) => {
    const [role] = useRole();
    const axiosSecure = useAxiosSecure();
    const { _id, image, title, status, content, postDate } = blog || {};
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
    return (
        <>
            <div className='relative flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-lg md:min-h-52 hover:bg-gray-100'>
                <div className='relative'>
                    <img className='object-cover w-full rounded-t-lg  md:h-52 md:w-80 md:rounded-none md:rounded-s-lg' src={image} alt="" />
                    <span className='absolute bg-primary text-white z-10 px-2 flex justify-center items-center top-0 rounded-l-md'>{status}</span>
                </div>

                <div className='p-4 space-y-4'>
                    <h1 className=' font-bold  text-gray-900 '>{title}</h1>
                    {
                        content.length > 20 ? <p className='font-normal text-gray-700'>{content.slice(0, 20)} <Link>Read More....</Link></p>
                            :
                            <p className='font-normal text-gray-700'>{content}</p>
                    }
                    <div>
                        <div className='flex justify-between gap-4'>
                            <button
                                onClick={() => handleDelete(_id)}
                                className='bg-red-300 text-gray-500 px-2 rounded'>Delete</button>
                            <button
                                onClick={() => handleUpdate(_id)}
                                className='bg-green-300 text-gray-600 px-2 rounded'>Update</button>


                        </div>
                        {
                            role === 'volunteer' && <div className='flex justify-end'>
                                {
                                    status === 'draft' ? <button className='w-full bg-primary text-white px-2 mt-2 rounded cursor-not-allowed'>{status === 'draft' ? 'Publish' : 'UnPublish'}</button>
                                        :
                                        <button className='w-full bg-green-500 text-white px-2 mt-2 rounded cursor-not-allowed'>{status === 'draft' ? 'Publish' : 'UnPublish'}</button>
                                }


                            </div>
                        }

                        {
                            role === 'admin' && <div className='flex justify-end'>
                                {
                                    status === 'draft' ? <button
                                        onClick={() => handleStatusChange(_id, status)}
                                        className='w-full bg-primary text-white px-2 mt-2 rounded '>{status === 'draft' ? 'Publish' : 'UnPublish'}</button>
                                        :
                                        <button
                                            onClick={() => handleStatusChange(_id, status)}
                                            className='w-full bg-green-500 text-white px-2 mt-2 rounded '>{status === 'draft' ? 'Publish' : 'UnPublish'}</button>
                                }


                            </div>
                        }
                        <span className='absolute top-0 right-0'>{postDate}</span>
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