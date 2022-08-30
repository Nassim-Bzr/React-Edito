import PropTypes from 'prop-types';
import './style.scss';

function Title({ text }) {
  return (
    <h1 className="title">{text}</h1>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
