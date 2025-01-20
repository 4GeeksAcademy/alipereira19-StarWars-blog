import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import People from "./component/People.jsx";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import LearnMorePeople from "./views/LearnMorePeople.jsx";
import LearnMoreVehicle from "./views/LearnMoreVehicle.jsx";
import LearnMoreStarships from "./views/LearnMoreStarships.jsx";
import LearnMorePlanets from "./views/LearnMorePlanets.jsx";
import LearnMoreSpecies from "./views/LearnMoreSpecies.jsx"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/morepeople" element={<LearnMorePeople />} />
						<Route path="/morevehicles" element={<LearnMoreVehicle />} />
						<Route path="/morestarships" element={<LearnMoreStarships />} />
						<Route path="/moreplanets" element={<LearnMorePlanets />} />
						<Route path="/morespecies" element={<LearnMoreSpecies />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
