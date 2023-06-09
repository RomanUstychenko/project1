import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({style, text, 
  onClick
}) => {
  return (
    <Btn 
    style={style}
    onClick={onClick}
    >
      {text}
    </Btn>
  );
};

Button.propTypes = {
    onClick: PropTypes.func,
  };