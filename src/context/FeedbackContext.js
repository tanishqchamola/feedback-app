import { createContext, useState, useEffect } from "react";
import { uid } from "../data/UniqueID";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);

	const [feedbackEditItem, setFeedbackEditItem] = useState({
		item: {},
		edit: false,
	});

	// if dependency array is empty it will run only once
	useEffect(() => {
		fetchFeedback();
	}, []);

	// fetch feedback data
	const fetchFeedback = async () => {
		const response = await fetch("/feedback?_sort=id&_order=desc");
		const data = await response.json();

		setFeedback(data);
		setIsLoading(false);
	};

	// adds feedback
	const addFeedback = async (newFeedback) => {
		if (newFeedback) {
			const response = await fetch("/feedback", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newFeedback),
			});

			const data = await response.json();
			newFeedback.id = uid();
			setFeedback([data, ...feedback]);
		}
	};

	// deletes feedback
	const deleteFeedback = async (id) => {
		if (window.confirm("Are you sure yo want to delete?")) {
			await fetch(`/feedback/${id}`, {
				method: "DELETE",
			});
			const feedbackAfterDelete = feedback.filter((item) => {
				return item.id !== id;
			});
			setFeedback(feedbackAfterDelete);
		}
	};

	// set item to be updated
	const editFeedback = (item) => {
		setFeedbackEditItem({
			item,
			edit: true,
		});
	};

	// update feedback item
	const updateFeedback = async (id, updatedItem) => {
		const response = await fetch(`/feedback/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedItem),
		});
		const data = await response.json();

		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)));
	};

	return <FeedbackContext.Provider value={{ feedback, feedbackEditItem, isLoading, deleteFeedback, addFeedback, editFeedback, updateFeedback }}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
