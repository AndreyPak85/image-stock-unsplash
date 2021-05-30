import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './picture-main.css';

function PictureMain(props) {
	const dispatch = useDispatch();
	const favoritePics = useSelector((state) => state.favorite.pictures);

	const addToFavorite = (pic) => {
		if (!favoritePics.includes(pic)) {
			dispatch({ type: 'ADD_FAVORITE', payload: pic });
		} else {
			dispatch({ type: 'REMOVE_FAVORITE', payload: pic });
		}
	};

	const picture = props.picture;

	return (
		<>
			<section
				className="picture-main"
				style={{
					background: `center /cover url(${picture.urls.small}) `,
				}}
			>
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="picture-main-title">
								<div className="picture-main-title-author ">
									<img src={picture.user.profile_image.medium} alt="" />
									<div className="picture-main-title-author-name">
										<div className="picture-main-title-author-name-first-last">
											{picture.user.name}
										</div>
										<div className="picture-main-title-author-name-insta">
											@{picture.user.instagram_username}
										</div>
									</div>
								</div>
								<div className="picture-main-title-btn">
									<div className="picture-main-title-btn-favorite">
										<img
											src="/assets/img/btns/favorites.png"
											alt=""
											onClick={() => addToFavorite(picture)}
										/>
									</div>
									<div className="picture-main-title-btn-download">
										<a href={picture.links.download} target="blank">
											<img src="/assets/img/btns/downloand.png" alt="" />
										</a>
									</div>
								</div>
							</div>
							<div className="picture-main-photo">
								<img src={picture.urls.regular} alt={picture.alt_description} />
							</div>
							<div className="picture-main-tags">Похожии теги</div>
							<div className="picture-main-tag">
								<ul className="d-flex">
									{picture.tags.map((tag) => {
										return (
											<li key={tag.title}>
												<div>{tag.title.charAt(0).toUpperCase() + tag.title.slice(1)}</div>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default PictureMain;
