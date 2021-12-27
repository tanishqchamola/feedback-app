import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext);

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

export default FeedbackStats;
