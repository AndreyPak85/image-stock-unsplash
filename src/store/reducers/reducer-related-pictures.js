const initialState = {
	pictures: [],
};

const reducerRelatedPictures = (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_PICTURES2':
			return { ...state, pictures: [...state.pictures, ...action.payload] };
		case 'CLEAN_PICTURES2':
			return { pictures: [] };
		default:
			return state;
	}
};

export default reducerRelatedPictures;
