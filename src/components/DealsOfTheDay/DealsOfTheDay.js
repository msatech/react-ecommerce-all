import React from 'react'
import './DealsOfTheDay.css'
const DealsOfTheDay =  () => {
    return (
        <div className="dealsoftheday card my-5">
            <div className="">
            <div className="dealsoftheday__header">
				<div>
                    <h2>Deals of the Week</h2>
                    <p>Similar to Items You Viewed</p>
                </div>
                
				<div><button className="btn">View All</button></div>
				
				
			</div>
        <div className="row mt-4 product__content">
            <div className="col-md-9">
                <div className="row deals__items">
                
                    <div className="delas__item">
                        <img src="https://www.pngitem.com/pimgs/m/70-704477_product-image-hersheys-lite-chocolate-syrup-hd-png.png" alt="" />
                        <div className="delas__item__text">
                            <p className="deals__item__title">Chocolate</p>
                            <p className="deas__item__price">$189  <strike>$200</strike> </p>
                        </div>
                        
                    </div>
                    
                    
                    <div className="delas__item">
                        <img src="https://www.kindpng.com/picc/m/336-3360580_transparent-cleaning-products-clipart-method-rhubarb-hd-png.png" alt="" />
                        <div className="delas__item__text">
                            <p className="deals__item__title"> Shampoo</p>
                            <p className="deas__item__price">$189  <strike>$200</strike> </p>
                        </div>
                    </div>
        
                    <div className="delas__item">
                        <img src="https://www.kindpng.com/picc/m/30-301912_kind-bottles-splashing-water-beer-products-in-png.png" alt="" />
                        <div className="delas__item__text">
                            <p className="deals__item__title">Nimbu Soda</p>
                            <p className="deas__item__price">$189  <strike>$200</strike> </p>
                        </div>
                    </div>
        
                    <div className="delas__item">
                        <img src="https://images-na.ssl-images-amazon.com/images/I/517MLsVTjDL._SL1000_.jpg" alt="" />
                        <div className="delas__item__text">
                            <p className="deals__item__title">Iphone Screen gard</p>
                            <p className="deas__item__price">$189  <strike>$200</strike> </p>
                        </div>
                    </div>
        
                    <div className="delas__item">
                        <img src="https://images.livemint.com/img/2021/03/09/1600x900/Nothing_Design_Concept_1_1615301613119_1615301624822.png" alt="" />
                        <div className="delas__item__text">
                            <p className="deals__item__title">wistle</p>
                            <p className="deas__item__price">$189  <strike>$200</strike> </p>
                        </div>
                    </div>
        
                    <div className="delas__item">
                        <img src="https://cdn.shopify.com/s/files/1/0057/3053/3422/products/GreenColouriPhone11TransparentCase_1200x1200.jpg?v=1602948325" alt="" />
                        <div className="delas__item__text">
                            <p className="deals__item__title">iphone 12 pro</p>
                            <p className="deas__item__price">$189  <strike>$200</strike> </p>
                        </div>
                    </div>
        
        
                    <div className="delas__item">
                        <img src="https://www.logitech.com/content/dam/logitech/en/products/video-conferencing/c930e/gallery/c930e-gallery-1.png" alt="" />
                        <div className="delas__item__text">
                            <p className="deals__item__title">web cam</p>
                            <p className="deas__item__price">$189  <strike>$200</strike> </p>
                        </div>
                    </div>
        
        
                    <div className="delas__item">
                        <img src="https://www.pngitem.com/pimgs/m/70-704477_product-image-hersheys-lite-chocolate-syrup-hd-png.png" alt="" />
                        <div className="delas__item__text">
                            <p className="deals__item__title">Hershey</p>
                            <p className="deas__item__price">$189  <strike>$200</strike> </p>
                        </div>
                    </div>
        
                    <div className="delas__item">
                        <img src="https://www.pngitem.com/pimgs/m/70-704477_product-image-hersheys-lite-chocolate-syrup-hd-png.png" alt="" />
                        <div className="delas__item__text">
                            <p className="deals__item__title">Dark Choclate</p>
                            <p className="deas__item__price">$189  <strike>$200</strike> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 deals__banner ">
                <img src="https://image.freepik.com/free-vector/black-friday-sale-banner-template-design_1199-158.jpg" alt="" />
            </div>
        </div>
        
       
    </div>
        </div>
    )
}

export default DealsOfTheDay
