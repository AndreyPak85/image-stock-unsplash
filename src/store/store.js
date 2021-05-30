import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducerTopics from './reducers/reducer-topics.js';
import reducerPictures from './reducers/reducer-pictures.js';
import reducerFavorite from './reducers/reducer-favorite-pictures.js';
import reducerMainPhoto from './reducers/reducer-main-photo.js';
import reducerViewPicture from './reducers/reducer-view-pictures';
import reducerHistory from './reducers/reducer-history.js';
import reducerRelatedPictures from './reducers/reducer-related-pictures.js';

const rootReducer = combineReducers({
	topics: reducerTopics,
	pictures: reducerPictures,
	favorite: reducerFavorite,
	picture: reducerMainPhoto,
	view: reducerViewPicture,
	history: reducerHistory,
	related: reducerRelatedPictures,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
