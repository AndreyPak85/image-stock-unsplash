import api from '../../api';

export const fetchPictures = () => {
	return function (dispatch) {
		api.photos.list({ perPage: 21, orderBy: 'popular' }).then((result) => {
			dispatch({ type: 'LOAD_PICTURES', payload: result.response.results });
		});
	};
};
