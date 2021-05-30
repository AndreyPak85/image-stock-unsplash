import React from 'react';

function PictureViewRelated(props) {
	const elements = props.pictures.map((pic) => {
		return (
			<div key={pic.id} className="col-xxl-4">
				<div className="pictures-view-item-img">
					<img src={pic.urls.small} alt={pic.alt_description} />
				</div>
			</div>
		);
	});

	return (
		<>
			<section className="pictures">
				<div className="container">
					<div className="row">{elements}</div>
				</div>
			</section>
		</>
	);
}

export default PictureViewRelated;
