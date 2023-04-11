import scss from "./Button.module.scss"
import PropTypes from 'prop-types';

export const Button = ({style, text, onClick}) => {
  return (
    <button 
    style={style}
    className={scss.Button}
    onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
  };