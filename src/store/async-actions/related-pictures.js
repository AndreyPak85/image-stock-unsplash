import api from '../../api';

export const fetchRelatedPictures = (photoId) => {
	return function (dispatch) {
		api.photos.get({ photoId: photoId }).then((result) => {
			result.response.related_collections.results.forEach((item) => {
				dispatch({ type: 'LOAD_PICTURES2', payload: item.preview_photos });
			});

			// dispatch({ type: 'LOAD_PICTURES', payload: result.response });
			// console.log(result.response.related_collections.results[0].preview_photos);
		});
	};
};
