import React from 'react';

import './title.css';

function Title(props) {
	return (
		<>
			<section className="title">
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<span>{props.label}</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Title;
