import useBlogs from "../../../../hooks/useBlogs";
import BlogCurd from "../../volunteer/blogCurd/BlogCurd";


const ContentManagements = () => {
    const [allBlogs, refetch] = useBlogs();
    return (
        <div className="mt-16 lg:mt-0 lg:px-4">
            <h1 className="text-lg sm:text-xl md:text-2xl text-secondery font-bold text-center py-10 lg:py-5 uppercase">Content Management admin</h1>
            {/* all blog curd here.... */}
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 px-4 lg:px-0">
                {
                    allBlogs.map((blog, idx) => {
                        return (
                            <BlogCurd key={idx} blog={blog} refetch={refetch} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ContentManagements;