import React, { useState } from 'react'
import './ProductCard.css'

const ProductCard = () => {
    const [ activeheart, setActiveheart ] = useState(false);
    return (
        <div className="productcard">
            <div className="card product__card pl-4 pr-3 py-2">
                <div className="product__top__section py-4 px-2">
                    <div className="mt-2"> <button className="btn discBtn text-white p-1 p-md-2">-25%</button> </div>
                    <div className="d-flex justify-content-center"> <img src="https://i.imgur.com/3SKCNZw.jpg" height="150px" width="100%" alt="" /> </div>
                    <div className="heart__section"> <div onClick={() => setActiveheart(!activeheart)} classNameName={`heart__icon__button ${activeheart}`}><i className="fa fa-heart fa-lg mt-2" aria-hidden="true"></i></div>   </div>
                </div>
                <div className="py-2">
                    <h6>Smartphone Apple iPhone Xs 64GB E2 Silver</h6>
                    <p> Apple A12, 4 GB, 64GB </p>
                    <div className="product__bottom">
                    <h6>Rs. 29 999</h6> <button className="buy d-flex ml-auto font-weight-bold pl-4 pr-5 py-1 border-0"> Buy </button> <span className="cart text-white d-flex p-2"><i className="fa fa-shopping-cart fa-lg align-self-center" aria-hidden="true"></i></span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductCard
