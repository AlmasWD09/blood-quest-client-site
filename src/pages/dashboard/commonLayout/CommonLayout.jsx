import useAuth from "../../../hooks/useAuth";


const CommonLayout = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="mt-10 lg:mt-0">
                {
                    user && <div className="flex justify-center items-center text-center relative lg:min-h-screen md:flex ">
                        <div className="bg-primaryGray px-2 py-8 lg:py-40 lg:p-40  rounded-md">
                            <div className="space-y-2">
                                <h1 className="text-3xl lg:text-5xl text-secondery font-bold text-center py-10 uppercase">wellcome <span>{user?.displayName}</span>!!</h1>
                                <p className="max-w-2xl mx-auto text-center">Your unwavering commitment to giving is truly inspiring. Through your generosity, we’re able to continue transforming lives and creating meaningful, lasting impacts. Together, we’re making the world a better place, one donation at a time. Thank you for being an essential part of our mission to help others</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>

    );
};

export default CommonLayout;