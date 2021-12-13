import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

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
		<Router>
			<Header />
			<div className="container">
				{/* <Routes> tag required in react-router-dom v6 */}
				<Routes>
					<Route
						exact
						path="/"
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
							</>
						}
					></Route>
					{/* react-router-dom v6 uses element attribute instead of component*/}
					<Route path="/about" element={<AboutPage />} />
				</Routes>
				<AboutIconLink />
			</div>
		</Router>
	);
}

export default App;
