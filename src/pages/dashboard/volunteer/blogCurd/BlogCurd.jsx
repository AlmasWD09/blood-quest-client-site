import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const BlogCurd = ({blog,refetch}) => {
    const axiosSecure = useAxiosSecure();
    const {_id,image,title,status,name,email,content,postDate} = blog || {};


    const handleDelete = async (id) =>{
        const res = await axiosSecure.delete(`/blog/releted/api/delete/${id}`)
       if(res.data.deletedCount > 0){
        refetch()
        toast.success('Blog deleted successfully')
       }
    }
    return (
        <>
        <div className='relative flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-lg md:min-h-52 hover:bg-gray-100'>
            <div className='relative'>
            <img className='object-cover w-full rounded-t-lg h-96 md:h-52 md:w-80 md:rounded-none md:rounded-s-lg' src={image} alt="" />
            <span className='absolute bg-primary text-white z-10 px-2 flex justify-center items-center top-0 rounded-l-md'>{status}</span>
            </div>

            <div className='p-4 space-y-4'>
                <h1 className=' font-bold  text-gray-900 '>{title}</h1>
                {
                    content.length > 20 ? <p className='font-normal text-gray-700'>{content.slice(0,20)} <Link>Read More....</Link></p>
                    :
                    <p className='font-normal text-gray-700'>{content}</p>
                }
                <div>
                    <div className='flex justify-between gap-4'>
                        <button 
                        onClick={()=>handleDelete(_id)}
                        className='bg-red-300 text-gray-500 px-2 rounded'>Delete</button>
                        <button className='bg-green-300 text-gray-600 px-2 rounded'>Update</button>
                    </div>
                    <div className='flex justify-end'>
                        <button className='w-full bg-primary text-white px-2 mt-2 rounded'>Publish</button>
                    </div>
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
};
export default BlogCurd;