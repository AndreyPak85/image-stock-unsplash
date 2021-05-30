import React from 'react';
import './header.css';

import HeaderTitle from '../header-title';
import HeaderSearch from '../header-search';
import HeaderNavigation from '../header-navigation';

function Header() {
	return (
		<>
			<section className="header">
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<HeaderTitle />
							<HeaderSearch />
							<HeaderNavigation />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Header;
