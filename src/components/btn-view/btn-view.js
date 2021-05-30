import React from 'react';
import { useDispatch } from 'react-redux';

import './btn-view.css';

function BtnView() {
	const dispatch = useDispatch();

	return (
		<>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="btn-view">
								<img
									onClick={() => dispatch({ type: 'LIST_TRUE' })}
									src="/assets/img/icons/btn-list.png"
									alt=""
								/>
								<img
									onClick={() => dispatch({ type: 'GRID_TRUE' })}
									src="/assets/img/icons/btn-grid.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default BtnView;
