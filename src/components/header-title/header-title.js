import React from 'react';
import { Link } from 'react-router-dom';

function HeaderTitle() {
	return (
		<>
			<div className="header-title-wrapper">
				<div className="header-title d-flex">
					<Link to="/">
						<div className="header-title-logo ">
							<img src="/assets/img/logo/logo.png" alt="Logo" />
							<span>ImageStock</span>
						</div>
					</Link>
					<div className="header-title-favorite">
						<Link to="/favorite">
							<img src="/assets/img/icons/heart.png" alt="" />
							<span>Избранное</span>
						</Link>
						<Link to="/history">
							<img src="/assets/img/icons/history.png" alt="" />
							<span>История поиска</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeaderTitle;
