import api from '../../api';

export const fetchPicture = (photoId) => {
	return function (dispatch) {
		api.photos.get({ photoId: photoId }).then((result) => {
			dispatch({ type: 'LOAD_PICTURE', payload: result.response });
		});
	};
};
