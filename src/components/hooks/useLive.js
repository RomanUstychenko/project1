import {  useSelector  } from "react-redux";
import { isLive } from 'redux/items/items-selector';

const UseLive = () => {
    const result = useSelector(isLive)
    // console.log(result)
    return result
};

export default UseLive;


// if (isUserLogin) {
//     return <Navigate to="/contacts" />
//   }