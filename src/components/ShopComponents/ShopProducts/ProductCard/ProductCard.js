import React, { useState } from 'react'
import './ProductCard.css'
import WordLimit from 'react-word-limit';
import { Link } from 'react-router-dom'
const ProductCard = (product) => {
    
    const [ activeheart, setActiveheart ] = useState(false);
    const { id, title, image, price, category } = product.product
    return (
        <Link to={`/product/${id}`}>
        <div className="productcard">
            
            <div className="card product__card pl-4 pr-3 py-2">
            <div className="mt-2"> <button className="btn discBtn text-white p-1 p-md-2">-25%</button> </div>
                <div className="product__top__section py-4 px-2">
                    
                    <div className="d-flex justify-content-center"> <img src={image} height="150px" width="100%" alt="" /> </div>
                    {/* <div className="heart__section"> <div onClick={() => setActiveheart(!activeheart)} classNameName={`heart__icon__button ${activeheart}`}><i className="fa fa-heart fa-lg mt-2" aria-hidden="true"></i></div>   </div> */}
                </div>
                <div className="py-2">
                    <h6 className="product__title"><WordLimit  limit={30}>{title}</WordLimit></h6>
                    {/* <p> <WordLimit limit={25}>{description}</WordLimit> </p> */}
                    <div className="product__bottom">
                    <h6>$ {price} </h6> <button className="buy ml-auto font-weight-bold pl-4 pr-4 py-1 border-0"> Buy </button> 
                </div>
            </div>
            </div>
        </div>
    </Link>
    )
}

export default ProductCard
