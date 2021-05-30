import React from 'react';
import { useSelector } from 'react-redux';

function HeaderNavigation() {
	const topics = useSelector((state) => state.topics.topics);

	const elements = topics.map((item) => {
		return (
			<li key={item.id} className="header-nav-item">
				{item.title}
			</li>
		);
	});

	return (
		<>
			<div className="header-nav">
				<ul className="header-nav-list">{elements}</ul>
			</div>
		</>
	);
}

export default HeaderNavigation;
