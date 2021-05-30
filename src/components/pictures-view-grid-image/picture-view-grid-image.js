import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function PictureViewGridImage(props) {
	const pic = props.pic;
	const [show, setShow] = useState('pictures-view-item-back no-show');
	const dispatch = useDispatch();
	const favoritePics = useSelector((state) => state.favorite.pictures);

	const toggleShow = () => {
		if (show === 'pictures-view-item-back') {
			setShow('pictures-view-item-back no-show');
		} else {
			setShow('pictures-view-item-back');
		}
	};

	const addToFavorite = (pic) => {
		if (!favoritePics.includes(pic)) {
			dispatch({ type: 'ADD_FAVORITE', payload: pic });
		} else {
			dispatch({ type: 'REMOVE_FAVORITE', payload: pic });
		}
	};

	return (
		<>
			<div key={pic.id} className="col-xxl-4 pictures-view-item" onClick={toggleShow}>
				<div className="pictures-view-item-img">
					<img src={pic.urls.small} alt={pic.alt_description} onClick={toggleShow} />
					<div className={show}>
						<div className="pictures-view-item-back-descr">
							<img src={pic.user.profile_image.medium} alt={pic.user.bio} />
							<div className="picture-view-item-back-inner-name">{pic.user.name}</div>
							<div className="picture-view-item-back-inner-insta">@{pic.user.username}</div>
							<div className="picture-view-item-back-inner-icons2">
								<img
									src="/assets/img/icons/heart.png"
									alt="favorite"
									onClick={() => addToFavorite(pic)}
								/>
								<Link to={`/picture/${pic.id}`}>
									<img src="/assets/img/icons/maximize.png" alt="maximize" />
								</Link>
								<a href={pic.links.download} target="_blank" rel="noreferrer">
									<img src="/assets/img/icons/download.png" alt="download" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PictureViewGridImage;
