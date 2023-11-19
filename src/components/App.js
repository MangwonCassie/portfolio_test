import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ProjectDetail from "./pages/ProjectDetail";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<I18nextProvider i18n={i18n}>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/projects" component={ProjectsPage} />
				<Route exact path="/projects/:name" component={ProjectDetail} />
				<Route exact path="/blog" component={BlogPage} />
			</I18nextProvider>
		</BrowserRouter>
	);
}

export default App;
