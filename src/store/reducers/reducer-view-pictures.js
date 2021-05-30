const initialState = true;

const reducerViewPicture = (state = initialState, action) => {
	switch (action.type) {
		case 'GRID_TRUE':
			return (state = true);
		case 'LIST_TRUE':
			return (state = false);
		default:
			return state;
	}
};

export default reducerViewPicture;
