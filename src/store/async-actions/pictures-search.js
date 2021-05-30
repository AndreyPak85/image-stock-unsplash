import api from '../../api';

export const searchPictures = (value) => {
	return function (dispatch) {
		api.search
			.getPhotos({
				query: value,
				perPage: 21,
				orderBy: 'popular',
			})
			.then((result) => {
				dispatch({ type: 'LOAD_PICTURES', payload: result.response.results });
			});
	};
};
