
import LoadindSpenier from "../../components/LoadindSpenier";
import NavbarPublishedBlogCrud from "../../components/navbarPublishedBlogCrud/NavbarPublishedBlogCrud";
import Container from "../../components/shared/Container";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PublishedBlogs = () => {
    const {loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    
    // published blog data get by mongodb
    const { data: publishedData = [],isLoading } = useQuery({
        queryKey: ['all-published-data',],
        queryFn: async () => {
            const res = await axiosSecure.get('/navbar/published/blog/related/api/get');
            return res.data;
        }
    });


if(loading || isLoading) return <LoadindSpenier />
    return (
        <>
        <Container>
        <div>
            <h1 className="text-xl md:text-2xl text-secondery font-bold text-center uppercase mt-4">published blogs</h1>
            {/* all blog curd here.... */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {
                    publishedData.map((blog, idx) => {
                        return (
                            <NavbarPublishedBlogCrud key={idx} blog={blog} />
                        )
                    })
                }
            </div>
        </div>
        </Container>
        </>
    );
};

export default PublishedBlogs;