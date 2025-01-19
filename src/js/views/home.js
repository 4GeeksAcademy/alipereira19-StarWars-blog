import React from "react";

import "../../styles/home.css";
import People from "../component/People.jsx";
import Vehicles from "../component/Vehicles.jsx"
import Starships from "../component/Starships.jsx";

export const Home = () => (
	<div className="text-center mt-5 f-flex">
		<div>
			<People />
			<br />
			<Vehicles />
			<br />
			<Starships />
		</div>
	</div>
);
