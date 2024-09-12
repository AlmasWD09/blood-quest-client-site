import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import LoadindSpenier from "../components/LoadindSpenier";
import PropTypes from "prop-types";



const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [role, isLoading] = useRole();


    if(loading || isLoading){
        return <LoadindSpenier />
    }
    if (user && role === 'admin') {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};
AdminRoute.propTypes = {
    children: PropTypes.node
};
export default AdminRoute;