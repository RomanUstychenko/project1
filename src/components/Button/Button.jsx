import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({style, text, type,
  onClick
}) => {
  return (
    <Btn 
    style={style}
    onClick={onClick}
    type={type}
    >
      {text}
    </Btn>
  );
};

Button.propTypes = {
    onClick: PropTypes.func,
  };