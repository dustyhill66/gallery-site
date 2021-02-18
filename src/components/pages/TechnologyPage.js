import React, {Fragment} from 'react';
import techPic from '../../images/technology.jpg'


export const TechnologyPage = () => {
  return (
    <Fragment>
      <p className="p-text">Вот как-то так :)</p>
      <img src={techPic} alt="technology picture" />
    </Fragment>
  )
}