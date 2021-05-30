import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';

import HomePage from '../pages/home-page.js';
import FavoritePage from '../pages/favorite-page.js';
import PicturePage from '../pages/picture-page.js';
import HistoryPage from '../pages/history-page.js';

function App() {
	return (
		<>
			<Router>
				{/* Home page */}
				<Route path="/" exact component={HomePage} />
				<Route path="/search/:value" component={HomePage} />

				{/* Favorite page */}
				<Route path="/favorite" component={FavoritePage} />

				{/* Picture page
				<Route path="/picture" exact component={PicturePage} /> */}

				{/* Picture page detail */}
				<Route path="/picture/:id" component={PicturePage} />

				<Route path="/history" component={HistoryPage} />
			</Router>
		</>
	);
}

export default App;
