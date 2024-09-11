import { CgArrowLongRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { CiCalendarDate } from "react-icons/ci";

const NavbarPublishedBlogCrud = ({ blog }) => {
    console.log(blog);
    const { _id, image, title, status, content, postDate } = blog || {};
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/published-blogs-details/${id}`)
    }


    const dateString = postDate;

    // Convert to Date object
    const datee = new Date(dateString);

    // Extract the date part in ISO 8601 format (YYYY-MM-DD)
    const ConvertDate = datee.toISOString().slice(0, 10);
    return (
        <>
            {/* <section className="bg-white dark:bg-gray-900">
                <div classNameName="bg-gray-50 shadow-md p-4 rounded-lg">
                    <img classNameName="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={image} alt="" />

                    <div classNameName="mt-8">
                        <span classNameName="text-blue-500 ">{status}</span>

                        <h1 classNameName="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                            {title}
                        </h1>
                        <p>{postDate}</p>
                        <p classNameName="mt-2 text-gray-500 dark:text-gray-400">
                            {content}
                        </p>

                        <div classNameName="mt-2">
                            <button
                                onClick={() => handleDetails(_id)}
                                classNameName="flex items-center font-semibold text-secondery ">See the details<CgArrowLongRight classNameName="text-xl ml-1" /></button>
                        </div>
                    </div>
                </div>
            </section> */}
            
            <div className="bg-white ">
                <div className=" bg-white border border-gray-200 rounded-lg shadow ">
                    <img className="rounded-t-lg w-full h-[300px] object-cover object-center" src={image} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <small className="text-primary font-semibold flex items-center gap-1"><CiCalendarDate className="text-xl"/>{ConvertDate}</small>


                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
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