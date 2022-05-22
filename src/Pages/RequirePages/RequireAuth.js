import { useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Sheared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const location = useLocation();

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }



    return children;
};

export default RequireAuth;