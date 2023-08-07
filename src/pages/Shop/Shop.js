import React from 'react'
import ShopProducts from '../../components/ShopComponents/ShopProducts/ShopProducts.js';
import ShopMobileFilters from '../../components/ShopComponents/ShopMobileFilters/ShopMobileFilters.js';
import './Shop.css'
const Shop = () => {
    return (
        <div className="shop">
            <ShopProducts />
            <ShopMobileFilters className="shop__shopmobilefilters" />
        </div>
    )
}

export default Shop
