import {  useSelector  } from "react-redux";
import { isLogin } from 'redux/auth/auth-selector';

const UseAuth = () => {
    const result = useSelector(isLogin)
    return result
};

export default UseAuth;


// if (isUserLogin) {
//     return <Navigate to="/contacts" />
//   }