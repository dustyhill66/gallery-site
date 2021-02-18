import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import WithDBService from '../hoc/with-db-service'
import {menuLoaded, menuRequested, menuError} from '../../actions/actions'

const GalleryItemPage = (props) => {
	const [currentImg, setCurrentImg] = useState("")

	useEffect(() => {
		if(props.galleryItems.length === 0) {
			props.menuRequested()

			const {DBService} = props
			props.menuLoaded(DBService.url)
		}
	}, [])

	if(props.loading) {
		return (
			<div>Loading</div>
		)
	}

	const item = props.galleryItems.find(elem => elem.id === props.match.params.id)
	const {id, category, title, url, imgUrl, description} = item

	const handlerOnClick = (event) => {
		console.log(event.target.src)
		setCurrentImg(event.target.src)
	}

	const template = 
	Object.keys(imgUrl).
	map(item => 
		<img 
			src={imgUrl[item]} 
			style={{height: '100px', width: 'auto', marginRight: '5px'}}
			key={item}
			onClick={handlerOnClick}
		/>)

	return (
			<div>
        <h3 className="item-page__wrap-title">{title}</h3>
        <div>
					<img 
						src={currentImg ? currentImg.toString() : imgUrl.img1 } 
					/>
				</div>
        <div className="img-preview__wrap">{template}</div>
        <div>{description}</div>
			</div>              
	)
}

const mapStateToProps = (state) => {
	return {
		galleryItems: state.gallery,
		loading: state.loading,
		error: state.error
	}
}

const mapDispatchToProps = {
	menuLoaded,
	menuRequested,
	menuError
}

export default WithDBService ()( connect(mapStateToProps, mapDispatchToProps)(GalleryItemPage))