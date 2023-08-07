import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import './ProductCarousel.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const ProductCarousel = ({title, products}) => {
	console.log(products)

	

	const options = {
		loop:false,
		margin:30,
		autoplay:true,
		autoplayTimeout:6000,
		nav:false,
		dots:false,
		lazyLoad:true,
		animateOut:true,
		responsive:
		{
		0:{items:2},
		575:{items:3},
		768:{items:4},
		991:{items:5},
		1199:{items:7}
		}
		}

		const useStyles = makeStyles((theme) => ({
			root: {
			  display: 'flex',
			  flexDirection: 'column',
			  '& > * + *': {
				marginTop: theme.spacing(1),
			  },
			},
		  }));

		const classes = useStyles();
		
		const element = 8;
    return (
        <div className="productcarousel">
			<div className="productcarousel__header">
				<div><h2>{title}</h2></div>
				<div><button className="btn">View All</button></div>
				
				
			</div>
           <OwlCarousel  {...options} className='owl-theme'  nav>

		   {
                products.map(product => (
					
					<div class='item'>
						<div class="thumb-wrapper">
							<div class="img-box">
								<img src={product.productImage} class="img-responsive img-fluid" alt="" />
							</div>
							<div class="thumb-content">
								<h4>{product.name}</h4>
								<p class="item-price"><strike>$400.00</strike> <span>${product.productPrice}</span></p>
								<div className={classes.root}>
								
								<Rating name="half-rating-read" defaultValue={product.productRating} precision={0.5} readOnly />
								</div>
								
							</div>						
						</div>
					</div>

                ))
            }
    
  
</OwlCarousel>
        </div>
    )
}

export default ProductCarousel
