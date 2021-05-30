import React from 'react';
import { useSelector } from 'react-redux';

import './pictures-view.css';

import PicturesViewGrid from '../pictures-view-grid/';
import PicturesViewList from '../pictures-view-list/';

function PicturesView(props) {
	const pictures = props.pictures;

	const grid = useSelector((state) => state.view);

	return (
		<>
			<section className="pictures">
				<div className="container">
					<div className="row">
						{grid ? <PicturesViewGrid pictures={pictures} /> : <PicturesViewList pictures={pictures} />}
					</div>
				</div>
			</section>
		</>
	);
}

export default PicturesView;
