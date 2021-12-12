import { useState } from "react";
import Header from "./components/Header";

import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { uid } from "./data/UniqueID";

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure yo want to delete?")) {
			const feedbackAfterDelete = feedback.filter((item) => {
				return item.id !== id;
			});
			setFeedback(feedbackAfterDelete);
		}
	};

	const addFeedback = (newFeedback) => {
		if (newFeedback) {
			newFeedback.id = uid();
			console.log(newFeedback);
			setFeedback([newFeedback, ...feedback]);
		}
	};

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
