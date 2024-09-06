import { CgArrowLongRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const NavbarPublishedBlogCrud = ({ blog }) => {
    const { _id, image, title, status, content, postDate } = blog || {};
    const navigate = useNavigate();

    const handleDetails = (id) => {
        navigate(`/published-blogs-details/${id}`)
    }
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="bg-gray-50 shadow-md p-4 rounded-lg">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={image} alt="" />

                    <div className="mt-8">
                        <span className="text-blue-500 ">{status}</span>

                        <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                            {title}
                        </h1>

                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            {content}
                        </p>

                        <div className="mt-2">
                            <button
                                onClick={() => handleDetails(_id)}
                                className="flex items-center font-semibold text-secondery ">See the details<CgArrowLongRight className="text-xl ml-1" /></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
// props-type validation
NavbarPublishedBlogCrud.propTypes = {
    blog: PropTypes.object,
};
export default NavbarPublishedBlogCrud;