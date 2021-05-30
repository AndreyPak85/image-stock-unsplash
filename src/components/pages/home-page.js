import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../header';
import BtnView from '../btn-view/';
import PicturesView from '../pictures-view/';

import { fetchPictures } from '../../store/async-actions/pictures-load.js';
import { searchPictures } from '../../store/async-actions/pictures-search';

function HomePage({ match }) {
	const pictures = useSelector((state) => state.pictures.pictures);
	const dispatch = useDispatch();

	useEffect(() => {
		if (match.path === '/') {
			dispatch(fetchPictures());
		} else {
			dispatch(searchPictures(match.params.value));
		}

		return () => {
			dispatch({ type: 'CLEAN_PICTURES' });
		};
	}, []);

	return (
		<>
			<Header />
			<BtnView />
			<PicturesView pictures={pictures} />
		</>
	);
}

export default HomePage;
