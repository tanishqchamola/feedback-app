import PropTypes from "prop-types";

function Card({ children, reverse }) {
	// Conditional class
	return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

	//Conditional Style
	// return (
	// 	<div className="card" style={reverse && { backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#fff" }}>
	// 		{children}
	// 	</div>
	// );
}

Card.defaultProps = {
	reverse: false,
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};

export default Card;
