import React from 'react';

function PicturesGridItem(props) {
	const { pictures } = props;

	const elements = pictures.map((item) => {
		return <img key={item.id} src={item.urls.small} alt={item.title} />;
	});

	return (
		<>
			<div className="col-xxl-4">{elements}</div>
		</>
	);
}

export default PicturesGridItem;
