import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
	//Average calculation
	let average =
		feedback.reduce((accumulator, currentItem) => {
			return accumulator + currentItem.rating;
		}, 0) / feedback.length;
	// 0 is defaut value of accumulator

	// regex to remove trailing 0, e.g. 9.0 -> 9
	average = average.toFixed(1).replace(/[.,]0$/, "");

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</div>
	);
}

FeedbackStats.propTypes = {
	// feedback: PropTypes.array,

	//Defining Structure of the item in the prop array
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
};

export default FeedbackStats;
