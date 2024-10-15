import CreateDonationForm from "./CreateDonationForm";


const CreateDonationRequest = () => {
    return (
        <div className="mt-24 md:mt-20 lg:mt-0 px-4 lg:pb-0 lg:px-0">
            <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">create donaton request</h1>
            {/* create donation form */}
            <CreateDonationForm />
        </div>
    );
};

export default CreateDonationRequest;