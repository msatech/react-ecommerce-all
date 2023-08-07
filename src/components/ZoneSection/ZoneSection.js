import React from 'react'
import './ZoneSection.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const ZoneSection = ({zoneproducts}) => {
    
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
		0:{items:4},
		575:{items:4},
		768:{items:6},
		991:{items:8},
		1199:{items:10}
		}
		}

    return (
        <div className="zonesection">
            <div className="zonesection__header">
				<div><h2>Intertainment Zone </h2></div>
				{/* <div><button className="btn">View All</button></div> */}
			</div>
            <div className="zonesection__items">
                <div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/616534/1617032973340.png?imwidth=414&impolicy=hq" alt="fakeimage-1" /></div>
                <div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/616535/1617033108775.png?imwidth=414&impolicy=hq" alt="fakeimage-2" /></div>
                <div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/616536/1617033260453.png?imwidth=414&impolicy=hq" alt="fakeimage-3" /></div>
                <div className="zonesection__item"><img src="https://assetscdn1.paytm.com/images/catalog/view_item/616537/1617032996766.png?imwidth=414&impolicy=hq" alt="fakeimage-4" /></div>
                
            </div>
            <div className="zonesection__carousel">
            <OwlCarousel  {...options} className='owl-theme'  nav>

            {
                zoneproducts.map(product => (
                    
                    <div class='item'>
                        
                            <div class="img-box">
                                <img src={product.categoryImg} class="img-responsive img-fluid" alt={product.name} />
                               
                            </div>
                            						
                        
                    </div>

                ))
            }


            </OwlCarousel>  
            </div>
        </div>
    )
}

export default ZoneSection
