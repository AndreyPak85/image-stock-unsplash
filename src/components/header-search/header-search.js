import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPictures } from '../../store/async-actions/pictures-search.js';

function HeaderSearch() {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const submitHistory = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_HISTORY', payload: value });
		dispatch({ type: 'CLEAN_PICTURES' });
		dispatch(searchPictures(value));
	};

	const onInputChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div className="header-search">
				<form action="" onSubmit={submitHistory}>
					<input type="text" placeholder="Поиск" onChange={onInputChange} />
				</form>
			</div>
		</>
	);
}

export default HeaderSearch;
