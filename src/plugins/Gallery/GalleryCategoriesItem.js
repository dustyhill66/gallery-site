import React, {Fragment} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import {Broshi} from './Broshi'
// import {DecorComp} from './DecorComp'

export function GalleryCategoriesItem({ category }) {
  
  
  return (
    <Fragment>
      
      <div className="col">
      <div className="category_card">
        <div className="category_card-text-wrap">
          <h5 className="h6-text category_card-title" data-id={category.id}>{category.title}</h5>
        </div>
        <div className="category_card-img-wrap">
          <img className="category_card-img" data-id={category.id} src={category.img} />
        </div>
      </div>
    </div>

   </Fragment>


  )
}




