import React from 'react';
import PictureViewListImage from '../pictures-view-list-image/';

function PicturesViewList(props) {
	const elements = props.pictures.map((pic) => {
		return <PictureViewListImage key={pic.id} pic={pic} />;
	});

	return <>{elements}</>;
}

export default PicturesViewList;
