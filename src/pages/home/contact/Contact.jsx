
import { useRef } from "react";
import Container from "../../../components/shared/Container";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_SERVICE_ID
        const templateId = import.meta.env.VITE_TEMPLETE_ID
        const publicKey = import.meta.env.VITE_PUBLICE_KEY

        const formData = new FormData(form.current);
        const formValues = Object.fromEntries(formData.entries());

        // Validation check
        if (!formValues.first_name || !formValues.last_name || !formValues.email || !formValues.request_message) {
            toast.error('All fields are required.');
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey,
            })
            .then(() => {
                toast.success('Email send Successfully')
                form.current.reset();  // Reset the form here
            },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error(error.text)
                },
            );
    };
    return (
        <>
            <Container>
                <div className=" mt-10  lg:px-28">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
                        {/* contant */}
                        <div className="w-full md:w-[50%] lg:w-[40%] text-white p-10 md:py-14 lg:py-28 bg-primary rounded-2xl space-y-5">
                            <h3 className="text-xl md:text-3xl  font-bold uppercase">Get in Touch</h3>
                            <p className="text-lg font-semibold text-gray-100">Have questions or need assistance? Contact us today to learn more about donating blood and saving lives.</p>
                            <hr />
                            <p className="flex items-center"><FaLocationDot className="text-xl " /> Mymensingh-Fulbaria, Bangladesh</p>
                            <p className="flex items-center"><IoCallSharp className="text-xl " /> +01704995802</p>
                            <p className="flex items-center"><MdEmail className="text-xl  mr-1" />skalmas634@gmail.com</p>
                        </div>

                        {/* input field here.... */}
                        <div className="w-full md:w-[50%] lg:w-[55%] bg-white py-4 px-10 ">
                            <form ref={form} onSubmit={sendEmail}>
                                {/*first name */}
                                <div className="w-full mt-6">
                                    <div>
                                        <input
                                            type="name"
                                            name="first_name"
                                            className="block w-full py-2 lg:py-4 pl-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300  focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your First Name" />
                                    </div>
                                </div>

                                {/*lastt name */}
                                <div className="w-full mt-6">
                                    <div>
                                        <input
                                            type="name"
                                            name="last_name"
                                            className="block w-full py-2 lg:py-4 pl-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300  focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Last Name" />
                                    </div>
                                </div>

                                {/* email */}
                                <div className="w-full mt-6">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            className="block w-full py-2 lg:py-4 pl-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300  focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Email" />
                                    </div>
                                </div>

                                {/* request message */}
                                <div className="w-full mt-6">
                                    <textarea
                                        name="request_message"
                                        className='resize-none w-full px-4 py-2 md:py-6 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-primary focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring' placeholder="Your Message..." />
                                </div>
                                {/* contact button */}
                                <div className="flex justify-start py-4 lg:py-6">
                                    <button type="submit" className="p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary hover:bg-[#991b1b] rounded-lg ">
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