import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import People from "../component/People.jsx";
import Vehicles from "../component/Vehicles.jsx"

export const Home = () => (
	<div className="text-center mt-5 f-flex">
		<div>
			<People />
			<Vehicles />
		</div>
	</div>
);
