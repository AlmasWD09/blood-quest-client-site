import { useForm } from "react-hook-form";
import Container from "../../../components/shared/Container";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <Container>
                <div className=" mt-10 -mb-10">
                    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-0">
                        {/* contant */}
                        <div className=" w-[40%] text-white p-10 bg-primary space-y-5">
                            <h3 className="text-xl md:text-2xl  font-bold uppercase">Get in Touch</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <p className="flex items-center"><FaLocationDot className="text-xl " /> Mymensingh-Fulbaria, Bangladesh</p>
                            <p className="flex items-center"><IoCallSharp className="text-xl " /> +01704995802</p>
                            <p className="flex items-center"><MdEmail className="text-xl  mr-1" />skalmas634@gmail.com</p>
                        </div>

                        {/* input field here.... */}
                        <div className=" w-[60%] bg-white py-5 px-10">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/*first name */}
                                <div className="w-full mt-6">
                                    <div>
                                        <input
                                            type="name"
                                            name="first-name"
                                            {...register("first-name", { required: true })}
                                            className="block w-full py-5 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your First Name" />
                                    </div>
                                </div>

                                {/*lastt name */}
                                <div className="w-full mt-6">
                                    <div>
                                        <input
                                            type="name"
                                            name="last-name"
                                            {...register("last-name", { required: true })}
                                            className="block w-full py-5 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Lastst Name" />
                                    </div>
                                </div>

                                {/* email */}
                                <div className="w-full mt-6">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            {...register("email", { required: true })}
                                            className="block w-full py-5 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Email" />
                                    </div>
                                </div>

                                {/* request message */}
                                <div className="w-full mt-6">
                                    <textarea
                                        name="request_message"
                                        {...register("request_message", { required: true })}
                                        className='resize-none w-full px-4 py-2 md:py-6 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring' placeholder="Your Message..." />
                                </div>
                                {/* contact button */}
                                <div className="flex justify-center md:justify-start py-4 md:py-6">
                                    <button type="submit" className="p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg ">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;