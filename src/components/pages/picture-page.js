import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderSmall from '../header-small/';
import PictureMain from '../picture-main';
import PictureSubtitle from '../picture-subtitle';
import PictureViewRelated from '../pictures-view-related/';

import { fetchRelatedPictures } from '../../store/async-actions/related-pictures.js';
import { fetchPicture } from '../../store/async-actions/picture-main.js';

function PicturePage({ match }) {
	const dispatch = useDispatch();

	const pictures = useSelector((state) => state.related.pictures);

	useEffect(() => {
		dispatch(fetchRelatedPictures(match.params.id));
		dispatch(fetchPicture(match.params.id));

		return () => {
			dispatch({ type: 'CLEAN_PICTURES2' });
		};
	}, []);

	const pic = useSelector((state) => state.picture.picture);
	return (
		<>
			<HeaderSmall />
			<PictureMain picture={pic} />
			<PictureSubtitle />
			<PictureViewRelated pictures={pictures} />
		</>
	);
}

export default PicturePage;
