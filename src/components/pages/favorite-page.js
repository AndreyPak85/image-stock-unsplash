import React from 'react';
import { useSelector } from 'react-redux';

import HeaderSmall from '../header-small/';
import Title from '../title';
import BtnView from '../btn-view/';
import PicturesView from '../pictures-view';

function FavoritePage() {
	const pictures = useSelector((state) => state.favorite.pictures);

	return (
		<>
			<HeaderSmall />
			<Title label="Избранное" />
			<BtnView />
			<PicturesView pictures={pictures} />
		</>
	);
}

export default FavoritePage;
