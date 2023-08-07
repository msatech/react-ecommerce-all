import React from 'react'
import './LatestProduct.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const LatestProduct = ({ products}) => {

    const options = {
		loop:true,
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
		768:{items:3},
		991:{items:4},
		1199:{items:5}
		}
		}

    return (
        <div className="latestproduct row p-3">
            
            <div className="latestproduct__header col-md-3 col-sm-12">
				<div>
                    <h2>Latest Products</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti, </p>
                </div>
				<div><button className="btn">View All</button></div>
				
				
			</div>
            <div className="col-md-8 col-sm-12">
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
                                        
                                        
                                    </div>						
                                </div>
                            </div>

                        ))
                    }


                </OwlCarousel>;
            </div>
            
           
        </div>
    )
}

export default LatestProduct
