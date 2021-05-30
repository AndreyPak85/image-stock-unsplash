import React from 'react';
import { useSelector } from 'react-redux';

import HeaderSmall from '../header-small/';
import Title from '../title';
import HistoryList from '../history-list';

import './history-page.css';

function HistoryPage() {
	const history = useSelector((state) => state.history.history);

	const elements = history.map((item) => {
		return <HistoryList label={item} />;
	});

	return (
		<>
			<HeaderSmall />
			<Title label="История поиска" />
			<section className="history">
				<div className="container">
					<div className="row">
						<div className="col-xxl-6 offset-xxl-3 mt-5">
							<ul className="list-group">
								{history.length > 0 ? elements : <HistoryList label="Список пуст" />}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HistoryPage;
