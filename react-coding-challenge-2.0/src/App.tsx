import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import {ListView} from "./views/list-view";
import {NotFound} from "./views/notfound";
import {DetailView} from "./views/detail-view";
import {SiteHeader} from "./components/site-header";

function App() {
	return (
		<BrowserRouter>
			<SiteHeader />
			<Switch>
				<Route path="/" component={ListView} exact />
				<Route path="/list/:animalType" component={ListView}/>
				<Route path="/list" component={ListView}/>
				<Route path="/detail/:id" component={DetailView}/>
				<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;