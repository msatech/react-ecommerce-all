import React, {useState} from 'react'
import './Product.css';
import ImageZoom from '../../components/ShopComponents/ProductImagePreview/ImageZoom';

import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';

const Product = (props) => {
    console.log(props)
    const products = [
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/ipad.jpg",
            productPrice: '450',
            productRating: 2,
            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/headphone.jpg",
            productPrice: '450',
            productRating: 3,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/macbook-air.jpg",
            productPrice: '450',
            productRating: 5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/nikon.jpg",
            productPrice: '450',
            productRating: 2.5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/play-station.jpg",
            productPrice: '450',
            productRating: 4,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/macbook-pro.jpg",
            productPrice: '450',
            productRating: 3.5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/ipad.jpg",
            productPrice: '450',
            productRating: 4.5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/headphone.jpg",
            productPrice: '450',
            productRating: 1.5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/ipad.jpg",
            productPrice: '450',
            productRating: 2.5,

            
        },
        {
            name: "Apple iPad",
            productImage: "https://www.tutorialrepublic.com/examples/images/products/macbook-pro.jpg",
            productPrice: '450',
            productRating: 5,

            
        },
    ]

    const images = [
        "https://purepng.com/public/uploads/large/red-t-shirt-plp.png",
        "https://purepng.com/public/uploads/large/woman-dress-jnx.png",
        "https://purepng.com/public/uploads/large/checkered-cotton-handkerchief-jh1.png",
        "https://purepng.com/public/uploads/large/jeans-trouser-ygl.png",
        "https://purepng.com/public/uploads/large/red-t-shirt-plp.png",
        "https://purepng.com/public/uploads/large/woman-dress-jnx.png",
        
    ]
    
    
  const [image, setImage] = useState(images[0])
    return (
        <div className="product mb-5">
           <div className="mt-5 mb-5 pb-5">
        <div className="">
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="d-flex  flex-column justify-content-center">
                        <div className="main_image"> 
                            <ImageZoom imageurl={image} />
                           
                        </div>
                        <div className="thumbnail_images">
                            <ul id="thumbnail" className="thumbnail__items">
                                {
                                    images.map(image => (
                                        <li className="thumbnail__item"><img onMouseOver={e => setImage(image)} src={image} /></li>
                                    ))
                                }
                            
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 product__content">
                    <div className="p-3 right-side">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="text-left">Smartphone Apple iPhone Xs 64GB E2 Silver</h3> 
                            {/* <span className="heart"><i className="fa fa-heart"></i></span> */}
                        </div>
                        <div className="mt-2 pr-3 content text-left">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti eligendi ullam non repellat quia eaque! Sint exercitationem voluptatibus alias corporis quo doloribus, maiores non soluta error quaerat ducimus illo aspernatur, minus vitae expedita sit dolorem veniam. Sint animi laudantium labore, ipsam quo tenetur provident aperiam praesentium, quae cum similique incidunt, voluptate repellat harum error quia excepturi modi sunt. Dolor blanditiis iusto inventore. Amet sunt maiores labore eligendi excepturi illum minus tempore dolorem, expedita id, velit quod provident placeat modi sed. Quidem aperiam veritatis ex eveniet officiis dolores velit, autem quibusdam ullam ducimus, consectetur culpa consequuntur harum corrupti non at.

                            
                            </p>
                        </div>
                        <h3 className="text-left">$430.99</h3>
                        <div className="ratings d-flex flex-row align-items-center">
                            <div className="d-flex flex-row"> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i className='bx bxs-star'></i> <i class="fa fa-star"></i> </div> <span>441 reviews</span>
                        </div>
                        <div className="mt-5 text-left"> <span className="fw-bold">Color</span>
                            <div className="colors">
                                <ul id="marker">
                                    <li id="marker-1"></li>
                                    <li id="marker-2"></li>
                                    <li id="marker-3"></li>
                                    <li id="marker-4"></li>
                                    <li id="marker-5"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="buttons d-flex flex-row mt-5 gap-3"> <button className="btn btn-outline-dark">Buy Now</button> <button className="btn btn-dark">Add to Basket</button> </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ProductCarousel title="Recent Viewed Items" products={products} />
        </div>
    )
}

export default Product
