import React from 'react';
import {GalleryCategoriesItem} from './GalleryCategoriesItem'

const toHTML = product => `
	<div className="col">
		<div className="card">
			<div className="card-img-wrap">
				<img className="card-img" data-btn="price" data-id="${product.id}" src="${product.img}" alt="${product.title}">
			</div>
			<div className="card-text-wrap">
				<h5 className="card-title" data-btn="price" data-id="${product.id}">${product.title}</h5>
				<a href="#" className="btn card-btn" data-id="${product.id}">Подробнее</a>
			</div>
		</div>
	</div>
`

export function GalleryCategories(props) {
  
  return (
    <>
      {props.categories.map((category, index) => {
        if(index % 3 === 0) {
          return (
            <>
              <div className="row">
                <div className="separator"></div>
                <GalleryCategoriesItem category={category} />
            		<GalleryCategoriesItem category={category} />
            		<GalleryCategoriesItem category={category} />
              </div>
            </> 
          )
        }
        else {
        return ( 
            <GalleryCategoriesItem category={category} />
        )}
      })}
    </>
  )
}



