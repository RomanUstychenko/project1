import { getAllUser } from 'redux/user/user-selector';
import { useSelector } from 'react-redux';
import { Link, List, Img } from './LiveTitle.styled';
import { useLocation } from 'react-router-dom';

export default function LiveTitle({ className }) {
  const users = useSelector(getAllUser);
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const user = users.find(user => user._id === category);
  const chekName = Boolean(user);

  return (
    <List className={className}>
      {chekName ? (
        <>
          <Img src={user.logoURL} alt="avatar" />
          <Link key={user.id}>{`${user.name}`}</Link>
        </>
      ) : (
        <></>
      )}
      <style>{`
       
       .hide-show {
        display: none;
      } 
    `}</style>
    </List>
  );
}
