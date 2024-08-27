import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
// jodit react for..
import { useState, useRef, useEffect, } from 'react';
import JoditEditor from 'jodit-react';


const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddBlog = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit,setValue, formState: { errors }, } = useForm();

    const editor = useRef(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        register('content', { required: true });
      }, [register]);


    const onSubmit = async (data) => {
        console.log(data);



        // image upload imagebb
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });



    }
    return (
        <div>
            {/* blog form here...... */}
            <section className="">
                <div className="flex items-center justify-center min-h-screen px-6 ">
                    <div className="relative  w-full max-w-4xl bg-primaryGray shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-8 rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div>
                                <h1 className="text-xl md:text-2xl text-secondery font-bold text-center  uppercase">Add Blog</h1>
                            </div>
                            <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                                {/* user title */}
                                <div className="w-full mt-6">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 pl-3">
                                        Your title
                                    </label>

                                    <div>
                                        <input
                                            type="text"
                                            name="title"
                                            {...register("title", { required: true })}
                                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Title" />
                                    </div>
                                </div>

                                {/* photo url */}
                                <div className="w-full mt-6">
                                    <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900 pl-3">Image</label>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        {...register("image", { required: true })}
                                        className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-3 file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-primary dark:bg-gray-900 dark:focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* jodit-react component */}
                            <div className="w-full mt-6 ">
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    tabIndex={1}
                                    onChange={(newContent) => {
                                        setContent(newContent);
                                        setValue('content', newContent); // Update the form value with the editor content
                                      }}
                                />
                            </div>

                            {/* create content show in add form */}
                            <div className="mt-4">
                                <div>{content}</div>
                            </div>

                            {/* blog button */}
                            <div className="flex justify-center md:justify-end py-4 md:py-6">
                                <button type="submit" className="disabled:bg-gray-200  disabled:cursor-not-allowed p-2 md:px-6 md:py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg">Create Blog</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddBlog;