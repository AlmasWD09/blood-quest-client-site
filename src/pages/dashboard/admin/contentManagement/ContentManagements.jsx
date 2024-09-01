import useBlogs from "../../../../hooks/useBlogs";
import BlogCurd from "../../volunteer/blogCurd/BlogCurd";


const ContentManagements = () => {
    const [allBlogs, refetch] = useBlogs();
    return (
        <div>
            <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">Content Management admin</h1>
            {/* all blog curd here.... */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-16">
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