import {useDispatch,useSelector} from 'react-redux';
import {logout} from '../../redux/actions/authAction';
function Logout() {
    const dispatch = useDispatch();
    const error = useSelector (state => state.error)
        
        dispatch(logout())
    }
export default Logout;