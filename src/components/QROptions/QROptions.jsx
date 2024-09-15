import { nanoid } from 'nanoid';
import { getUser } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';
import { ToLiveLink, NavbarWrap, CreateQr } from './QROptions.styled';

export default function QROptions({ setModalQrActive }) {
  const user = useSelector(getUser);
  const items = user
    ? [{ id: nanoid(), to: `/live/${user._id}`, text: 'Go to QR Menu' }]
    : '';

  return (
    <NavbarWrap>
      {items.map(({ id, to, text }) => {
        return (
          <ToLiveLink
            key={id}
            target="_blank"
            rel="noreferrer noopener"
            to={to}
            end
          >
            {text}
          </ToLiveLink>
        );
      })}

      <CreateQr onClick={() => setModalQrActive(true)}>Create QR</CreateQr>
    </NavbarWrap>
    //  </>
  );
}
