import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/';
import Resume from './components/Resume';
import { Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

function App() {
	return (
		<div>
			<CssBaseline />
			<Route exact path="/" component={Home} />
			<Route path="/resume" component={Resume} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/contacts" component={Contacts} />
		</div>
	);
}

export default App;
