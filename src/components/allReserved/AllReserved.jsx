

const AllReserved = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="flex  justify-center bg-blue-50 py-8">
            <div>
            <p className="text-xl text-gray-500">© {currentYear} BloodQuest. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default AllReserved;