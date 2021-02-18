import React, {Fragment} from 'react';
import slide00 from '../../images/slider/00.jpg'
import slide01 from '../../images/slider/01.jpg'
import slide02 from '../../images/slider/02.jpg'
import slide03 from '../../images/slider/03.jpg'
import slide04 from '../../images/slider/04.jpg'
import slide05 from '../../images/slider/05.jpg'
import slide06 from '../../images/slider/06.jpg'
import slide07 from '../../images/slider/07.jpg'
import slide08 from '../../images/slider/08.jpg'
//import {Carousel} from 'react-bootstrap'

export const HomePage = () => {
  return (
  	<Fragment>
		
  		<img
	      className="d-block w-100"
	      src={slide00}
	    />
			<h6 className="h6-text align-left">Добро пожаловать!</h6>
			<p className="p-text align-left">На этом сайте представлены работы, выполненные в технике художественного литья. Все работы имеют ограниченный тираж. И предназначены для скрашивания нашей прекрасной жизни! :)
	  	</p>
		</Fragment>
  )
}

// <Fragment>
// 			<Carousel 
// 				indicators={false}
// 				fade={true}
// 				interval="3000" 
// 			>
// 			  <Carousel.Item>
// 			    <img
// 			      className="d-block w-100"
// 			      src={slide00}
// 			      alt="First slide"
// 			    />
// 			  </Carousel.Item>
// 			  <Carousel.Item>
// 			    <img
// 			      className="d-block w-100"
// 			      src={slide01}
// 			      alt="Third slide"
// 			    />
// 			  </Carousel.Item>
// 			  <Carousel.Item>
// 			    <img
// 			      className="d-block w-100"
// 			      src={slide02}
// 			      alt="Third slide"
// 			    />
// 			  </Carousel.Item>
// 			  <Carousel.Item>
// 			    <img
// 			      className="d-block w-100"
// 			      src={slide03}
// 			      alt="Third slide"
// 			    />
// 			  </Carousel.Item>
// 			  <Carousel.Item>
// 			    <img
// 			      className="d-block w-100"
// 			      src={slide04}
// 			      alt="Third slide"
// 			    />
// 			  </Carousel.Item>
// 			  <Carousel.Item>
// 			    <img
// 			      className="d-block w-100"
// 			      src={slide05}
// 			      alt="Third slide"
// 			    />
// 			  </Carousel.Item>
// 			  <Carousel.Item>
// 			    <img
// 			      className="d-block w-100"
// 			      src={slide06}
// 			      alt="Third slide"
// 			    />
// 			  </Carousel.Item>
// 			  <Carousel.Item>
// 			    <img
// 			      className="d-block w-100"
// 			      src={slide07}
// 			      alt="Third slide"
// 			    />
// 			  </Carousel.Item>
// 			  <Carousel.Item>
// 			    <img
// 			      className="d-block w-100"
// 			      src={slide08}
// 			      alt="Third slide"
// 			    />
// 			  </Carousel.Item>
// 			</Carousel>

// 			<h6 className="h6-text align-left">Добро пожаловать!</h6>
// 			<p className="p-text align-left">На этом сайте представлены работы, выполненные в технике художественного литья. Все работы имеют ограниченный тираж. И предназначены для скрашивания нашей прекрасной жизни! :)
// 	  	</p>
// 		</Fragment>