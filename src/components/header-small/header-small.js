import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './header-small.css';

import { searchPictures } from '../../store/async-actions/pictures-search.js';

function HeaderSmall() {
	const [search, setSearch] = useState('');
	const dispatch = useDispatch();
	const onInputChange = (e) => {
		setSearch(e.target.value);
		console.log(e.target.value);
	};

	const onSearch = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_HISTORY', payload: search });
		dispatch({ type: 'CLEAN_PICTURES' });
		dispatch(searchPictures(search));
		window.location.assign(`http://localhost:3000/search/${search}`);
	};

	return (
		<>
			<section className="header-small">
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="header-small-wrapper">
								<Link to="/">
									<div className="header-small-logo">
										<img src="./assets/img/logo/logo.png" alt="" />
										<span>ImageStock</span>
									</div>
								</Link>
								<div className="header-small-favorite">
									<img src="./assets/img/icons/search.png" alt="" />
									<form action="" onSubmit={onSearch}>
										<input type="text" placeholder="Поиск" onChange={onInputChange} />
									</form>

									<Link to="/favorite">
										<img src="./assets/img/icons/heart.png" alt="" />
										<span>Избранное</span>
									</Link>
									<Link to="/history">
										<img src="./assets/img/icons/history.png" alt="" />
										<span>История поиска</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HeaderSmall;
