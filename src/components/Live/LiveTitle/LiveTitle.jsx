import { getAllUser } from 'redux/user/user-selector';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Link, List, Img } from './LiveTitle.styled';
import { useLocation } from 'react-router-dom';

export default function LiveTitle({ className }) {
  const users = useSelector(getAllUser);
  const location = useLocation();

  const user = useMemo(() => {
    const category = location.pathname.split('/')[2];
    return users.find(user => user._id === category);
  }, [location.pathname, users]);

  return (
    <List className={className}>
      {user ? (
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
