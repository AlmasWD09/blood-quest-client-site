import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadindSpenier from "../LoadindSpenier";
import Container from "../shared/Container";


const PublishedDetails = () => {
    const { loading } = useAuth();
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();

    // single published blog data get by mongodb
    const { data: singlePublishedData = {}, isLoading } = useQuery({
        queryKey: ['single-published-data', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/navbar/publishedDetails/related/api/get/${id}`);
            return res.data;
        }
    });
    const { _id, image, title, status, content, postDate } = singlePublishedData || {};

    if (loading || isLoading) return <LoadindSpenier />
    return (
        <>
            <Container>
                <div className="max-w-2xl mx-auto  bg-white rounded-lg shadow-md ">
                    <img
                        className="object-cover object-center w-full h-64 md:h-96 rounded-lg"
                        src={image}
                        alt=""
                    />

                    <div className="p-6">
                        <div>
                            <span className="text-xs font-medium text-blue-600 ">{status}</span>
                            <a
                                href="#"
                                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600 hover:underline"
                                tabIndex="0"
                                role="link"
                            >
                                I Built A Successful Blog In One Year
                            </a>
                            <p className="mt-2 text-sm text-gray-600 ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.
                                Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada
                                lobortis.
                            </p>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img
                                        className="object-cover h-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                                        alt="Avatar"
                                    />
                                    <a
                                        href="#"
                                        className="mx-2 font-semibold text-gray-700 "
                                        tabIndex="0"
                                        role="link"
                                    >
                                        Jone Doe
                                    </a>
                                </div>
                                <span className="mx-1 text-xs text-gray-600 ">21 SEP 2015</span>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
};

export default PublishedDetails;