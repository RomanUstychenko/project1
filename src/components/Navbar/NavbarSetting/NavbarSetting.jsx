import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';
import {
  NavbarSettingName,
  NavbarSettingLogo,
  Welcome,
  UserName,
  Setting,
  NavbarSettingSet,
  SettingLink,
  ButtonLogout,
  TextButton,
} from './NavbarSetting.styled';
import { getUser } from 'redux/auth/auth-selector';
import HideSetting from 'components/hooks/hideSetting';

function UserGreeting({ user }) {
  if (user) {
    return (
      <NavbarSettingName>
        <NavbarSettingLogo src={user.logoURL} alt="avatar" />
        <UserName>{user.name}</UserName>
      </NavbarSettingName>
    );
  }
  return (
    <Welcome>
      Welcome, <UserName>User</UserName>
    </Welcome>
  );
}

export default function NavbarSetting() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const { SettingActive, hideSet } = HideSetting();

  const onLogout = () => {
    dispatch(logout());
    localStorage.clear();
  };

  return (
    <>
      <UserGreeting user={user} />
      <NavbarSettingSet>
        {SettingActive && (
          <SettingLink onClick={() => hideSet()} to={'/users'} end>
            <Setting />
          </SettingLink>
        )}
        <ButtonLogout type="button" onClick={onLogout}>
          <TextButton>Logout</TextButton>
        </ButtonLogout>
      </NavbarSettingSet>
    </>
  );
}
