
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { CiCalendarDate } from "react-icons/ci";

const NavbarPublishedBlogCrud = ({ blog }) => {
    const { _id, image, title, content, postDate } = blog || {};
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/published-blogs-details/${id}`)
    }


    const dateString = postDate;

    // Convert to Date object
    const datee = new Date(dateString);

    // Extract the date part in ISO 8601 format (YYYY-MM-DD)
    const ConvertDate = datee.toISOString().slice(0, 10);

    // Method 1: Using regex
    const convertedContent = content.replace(/<[^>]*>/g, '');
    return (
        <>
            <div className="bg-white ">
                <div className="bg-white border border-gray-200 rounded-lg shadow ">
                    <img className="rounded-t-lg w-full h-[300px] object-cover object-center" src={image} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                        <small className="text-primary font-semibold flex items-center gap-1"><CiCalendarDate className="text-xl" />{ConvertDate}</small>
                        
                        {
                            convertedContent?.length > 70 ? <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{convertedContent.slice(0, 70)} <span className="text-primary semifont-bold cursor-pointer">More...</span></p>
                                :
                                <p>{convertedContent}</p>
                        }

                        <button
                            onClick={() => handleDetails(_id)}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};
// props-type validation
NavbarPublishedBlogCrud.propTypes = {
    blog: PropTypes.object,
};
export default NavbarPublishedBlogCrud;