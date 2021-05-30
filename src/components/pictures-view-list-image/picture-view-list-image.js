import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PictureViewListImage(props) {
	const [show, setShow] = useState('picture-list-back no-show');
	const dispatch = useDispatch();
	const favoritePics = useSelector((state) => state.favorite.pictures);
	const { pic } = props;

	const toggleShow = () => {
		if (show === 'picture-list-back') {
			setShow('picture-list-back no-show');
		} else {
			setShow('picture-list-back');
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
			<div className="col-xxl-12">
				<div className="picture-list" onClick={toggleShow}>
					<img src={pic.urls.regular} alt={pic.alt_description} />
					<div className={show}>
						<div className="picture-list-back-description">
							<img src={pic.user.profile_image.medium} alt={pic.user.bio} />
							<div className="picture-view-item-back-inner-name">{pic.user.name}</div>
							<div className="picture-view-item-back-inner-insta">@{pic.user.username}</div>
							<div className="picture-view-item-back-inner-icons">
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

export default PictureViewListImage;
