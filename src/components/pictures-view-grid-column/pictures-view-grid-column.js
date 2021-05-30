import React, { useState, Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// export default class PicturesViewGridColumn extends Component {
// 	toggleShow(id) {
// 		console.log(id);
// 		this.setState({ noShow: false });
// 	}

// 	state = {
// 		noShow: true,
// 	};

// 	render() {
// 		let clazz = 'pictures-view-item-back ';
// 		if (this.state.noShow) {
// 			clazz += 'no-show';
// 		}

// 		const elements = this.props.pictures.map((pic) => {
// 			return (
// 				<div key={pic.id} className="pictures-view-item">
// 					<div className="pictures-view-item-img">
// 						<img src={pic.urls.small} alt={pic.alt_description} onClick={this.toggleShow} />
// 					</div>
// 					<div className={clazz} onClick={() => this.toggleShow(pic.id)}>
// 						<div className="pictures-view-item-back-inner">
// 							<div className="picture-view-item-back-inner-avatar">
// 								<img src={pic.user.profile_image.medium} alt="" />
// 							</div>
// 							<div className="picture-view-item-back-inner-name">{pic.user.name}</div>
// 							<div className="picture-view-item-back-inner-insta">@{pic.user.username}</div>
// 							<div className="picture-view-item-back-inner-icons">
// 								<img
// 									src="/assets/img/icons/heart.png"
// 									alt="favorite"
// 									onClick={() => console.log('favorite')}
// 								/>
// 								<img src="/assets/img/icons/maximize.png" alt="maximize" />
// 								<img src="/assets/img/icons/download.png" alt="download" />
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			);
// 		});

// 		return (
// 			<>
// 				<div className="col-xxl-4">{elements}</div>
// 			</>
// 		);
// 	}
// }

function PicturesViewGridColumn(props) {
	const [clazz, setClazz] = useState('pictures-view-item-back no-show');
	const dispatch = useDispatch();

	function toggleShow() {
		if (clazz === 'pictures-view-item-back no-show') {
			setClazz('pictures-view-item-back');
		} else {
			setClazz('pictures-view-item-back no-show');
		}
	}

	const favorite = useSelector((state) => state.favorite.pictures);

	function addFavorite(pic) {
		console.log(pic);
		if (!favorite.includes(pic)) {
			dispatch({ type: 'ADD_FAVORITE', payload: pic });
		} else {
			dispatch({ type: 'REMOVE_FAVORITE', payload: pic });
		}
	}

	const elements = props.pictures.map((pic) => {
		return (
			<div key={pic.id} className="pictures-view-item">
				<div className="pictures-view-item-img">
					<img src={pic.urls.small} alt={pic.alt_description} onClick={toggleShow} />
				</div>
				<div className={clazz} onClick={() => toggleShow(pic.id)}>
					<div className="pictures-view-item-back-inner">
						<div className="picture-view-item-back-inner-avatar">
							<img src={pic.user.profile_image.medium} alt="" />
						</div>
						<div className="picture-view-item-back-inner-name">{pic.user.name}</div>
						<div className="picture-view-item-back-inner-insta">@{pic.user.username}</div>
						<div className="picture-view-item-back-inner-icons">
							<img src="/assets/img/icons/heart.png" alt="favorite" onClick={() => addFavorite(pic)} />
							<img src="/assets/img/icons/maximize.png" alt="maximize" />
							<img src="/assets/img/icons/download.png" alt="download" />
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className="col-xxl-4">{elements}</div>
		</>
	);
}

export default PicturesViewGridColumn;
