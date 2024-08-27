import { useNavigate } from "react-router-dom";


const ContentManagement = () => {
    const navigate = useNavigate();
    const handleBlog = () =>{
        navigate('/dashboard/add-blog')
    }
    return (
        <div>
            <h1 className="text-xl md:text-2xl text-secondery font-bold text-center pb-5 md:py-5 uppercase">ContentManagement volunteer</h1>
            <div className="flex justify-center gap-6">
                <button 
                onClick={handleBlog}
                className="bg-primary p-2 rounded-md text-white">Add Blog</button>
                <button className="bg-green-800 p-2 rounded-md text-white hover:bg-green-600">Sort By Blog</button>
            </div>
            {/* all blog curd here.... */}
            <div>
                <p>all blog curd here...</p>
            </div>
        </div>
    );
};

export default ContentManagement;