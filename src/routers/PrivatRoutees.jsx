import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import LoadindSpenier from "../components/LoadindSpenier";

const PrivatRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <LoadindSpenier />
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};
// props-type validation
PrivatRoutes.propTypes = {
    children: PropTypes.object,
};
export default PrivatRoutes;