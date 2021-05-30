import React from 'react';

function HistoryList(props) {
	return (
		<>
			<li data-list className="list-group-item">
				{props.label}
			</li>
		</>
	);
}

export default HistoryList;
