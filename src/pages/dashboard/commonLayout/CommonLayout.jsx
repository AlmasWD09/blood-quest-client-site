import useAuth from "../../../hooks/useAuth";


const CommonLayout = () => {
    const { user } = useAuth();
    return (
        <>
            <div className="mt-10 lg:mt-0">
                {
                    user && <div className="">
                            <div className="bg-primaryGray h-screen flex flex-col justify-center items-center px-2 py-8 lg:py-0  rounded-md">
                                <h1 className="text-3xl lg:text-8xl text-secondery font-bold text-center py-10 uppercase">wellcome <br /> <span className="text-4xl">{user?.displayName}!!</span></h1>
                                <p className="max-w-[600px] text-center">Your unwavering commitment to giving is truly inspiring. Through your generosity, we’re able to continue transforming lives and creating meaningful, lasting impacts. Together, we’re making the world a better place, one donation at a time. Thank you for being an essential part of our mission to help others</p>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default CommonLayout;