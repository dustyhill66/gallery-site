import React from 'react'
import {Link} from 'react-router-dom'

const GalleryListItem = ({galleryItem}) => {
	const {id, category, title, url} = galleryItem

	return (
		<>
			<li className="gallery__item">
				<div className="card-wrap">
					<div className="card-text-wrap">
						<Link to={`/${id}`} className="h6-text card-title">{title}</Link>
					</div>
					<div className="card-img-wrap">
						<Link to={`/${id}`} className="h6-text card-title">
							<img className="card-img" src={url} alt={title} />
						</Link>
					</div>
				</div>
			</li>
		</>
	)
}

export default GalleryListItem