import React from 'react';
import PictureViewGridImage from '../pictures-view-grid-image/';

function PicturesViewGrid(props) {
	const elements = props.pictures.map((pic) => {
		return <PictureViewGridImage key={pic.id} pic={pic} />;
	});

	return <>{elements}</>;
}

export default PicturesViewGrid;
