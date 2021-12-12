import { useState } from "react";
import Radio from "./shared/Radio";
import { uid } from "../data/UniqueID";

function RatingSelect({ select }) {
	const ratingCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [selected, setSelected] = useState(10);

	const handleChange = (count) => {
		setSelected(count);
		select(count);
	};

	return (
		<ul className="rating">
			{ratingCount.map((count) => {
				return <Radio key={uid()} count={count} selected={selected} handleChange={handleChange} />;
			})}
		</ul>
	);
}

export default RatingSelect;
