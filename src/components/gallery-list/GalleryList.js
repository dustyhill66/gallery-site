import React, {useEffect} from 'react'
import GalleryListItem from '../gallery-list-item/GalleryListItem'
import {menuLoaded, menuRequested, menuError} from '../../actions/actions'
import {connect} from 'react-redux'
import WithDBService from '../hoc/with-db-service'
// import Error from '../error/error'
import {useHistory} from 'react-router-dom'

const GalleryList = (props) => {

	let history = useHistory()
  const {galleryItems, loading, error} = props

  const filteredItems = galleryItems.filter(item => {
		switch(history.location.pathname) {
			case '/gallery':
				return item.category === 'categories'
				break;
			case '/category-1':
				return item.category === 'broshi'
				break;
			case '/category-2':
				return item.category === 'decor-comp'
				break;
			case '/category-3':
				return item.category === 'zaponki'
				break;
			case '/category-4':
				return item.category === 'rings'
				break;
			case '/category-5':
				return item.category === 'pryazhki'
				break;
			case '/category-6':
				return item.category === 'other'
				break;
			case '/category-7':
				return item.category === 'sergi'
				break;
			case '/category-8':
				return item.category === 'temlyaki'
				break;
			case '/category-9':
				return item.category === 'figurki'
				break;
		}
  })

  useEffect(() => {
  	const {DBService} = props
  	console.log(DBService.url)
      props.menuLoaded(DBService.url)
  }, [])

  const items = filteredItems.map(galleryItem => {
    return (
      <GalleryListItem 
      	key={galleryItem.id} 
      	galleryItem={galleryItem}
      />
    )
	})

	return (
		<View items={items} />
	)
}

const View = ({items}) => {
	return ( 
		<ul className="gallery__list"> 
			{items}
		</ul>
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

export default WithDBService()(connect(mapStateToProps, mapDispatchToProps)(GalleryList))