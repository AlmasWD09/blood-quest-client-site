import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadindSpenier from "../LoadindSpenier";
import Container from "../shared/Container";


const PublishedDetails = () => {
    const { user, loading } = useAuth();
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

    const { _id, name,photo, image, title, status, content, postDate } = singlePublishedData || {};

    // Method 1: Using regex
  const convertedContent = content?.replace(/<[^>]*>/g, '');

    if (loading || isLoading) return <LoadindSpenier />
    return (
        <>
            <Container>
                <div className="max-w-2xl mx-auto  bg-white rounded-lg shadow-md mt-2">
                    <img
                        className="object-cover object-center w-full h-64 md:h-96 rounded-lg"
                        src={image}
                        alt={name}
                    />

                    <div className="p-6">
                        <div>
                            <p><span className="text-xs font-medium text-blue-600 ">{status}</span> ({_id})</p>
                            <h3
                                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600 hover:underline"
                                tabIndex="0"
                                role="link"
                            >
                                {title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 ">
                                {convertedContent}
                            </p>
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img
                                        className="object-cover h-10 rounded-full ring-2"
                                        src={photo}
                                        alt={name}
                                    />
                                    <a
                                        href="#"
                                        className="mx-2 font-semibold text-gray-700 "
                                        tabIndex="0"
                                        role="link"
                                    >
                                        {user?.displayName}
                                    </a>
                                </div>
                                <span className="mx-1 text-xs text-gray-600 ">{postDate}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
};

export default PublishedDetails;