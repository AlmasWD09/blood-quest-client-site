import CreateDonationForm from "./CreateDonationForm";


const CreateDonationRequest = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center md:py-5">create donaton request</h1>
            {/* create donation form */}
            <CreateDonationForm />
        </div>
    );
};

export default CreateDonationRequest;