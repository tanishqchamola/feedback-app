import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About the Project</h1>
				<p>A react app to colect customer feedback.</p>
				<br />
				<p>
					<Link to="/">Back To Home</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
