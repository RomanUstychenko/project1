import { useSelector } from 'react-redux';
import { isLive } from 'redux/items/items-selector';

const UseLive = () => {
  const result = useSelector(isLive);
  return result;
};

export default UseLive;
