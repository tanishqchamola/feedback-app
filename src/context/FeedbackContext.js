import { createContext, useState } from "react";
import { uid } from "../data/UniqueID";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: "kx3pzgwi0mwgkf5zz1ip",
			rating: 10,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
		},
		{
			id: "kx3q03ppxrga6uzwnt",
			rating: 9,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
		},
		{
			id: "kx3q0d5rhz7op4jnvg9",
			rating: 8,
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
		},
	]);

	const [feedbackEditItem, setFeedbackEditItem] = useState({
		item: {},
		edit: false,
	});

	// adds feedback
	const addFeedback = (newFeedback) => {
		if (newFeedback) {
			newFeedback.id = uid();
			console.log(newFeedback);
			setFeedback([newFeedback, ...feedback]);
		}
	};

	// deletes feedback
	const deleteFeedback = (id) => {
		if (window.confirm("Are you sure yo want to delete?")) {
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
	const updateFeedback = (id, updatedItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));
	};

	return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, updateFeedback, feedbackEditItem }}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
