import PropTypes from "prop-types";

const Radio = ({ count, selected, handleChange }) => {
	return (
		<li>
			<input type="radio" id={`num${count}`} name="rating" value={count} onChange={() => handleChange(count)} checked={selected === count} />
			<label htmlFor={`num${count}`}>{count}</label>
		</li>
	);
};

Radio.propTypes = {
	selected: PropTypes.number.isRequired,
};

export default Radio;
