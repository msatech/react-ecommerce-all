import React, { useState, useEffect } from 'react'
import './ShopProducts.css'
import SideFilters from '../SideFilters/SideFilters';
import ProductCard from './ProductCard/ProductCard';
import OfferBanners from '../../OfferBanners/OfferBanners';
import { ProductSkeleton } from '../../../SkeletonStructure/ProductSkeleton';


const ShopProducts = () => {

    const [products, setProducts] = useState(null);
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            
            setProducts(data);
            
        }, 100)
    })

    return (
        <div className="shopproducts">
            <div className="shop__container">
                <div className="shop__container__filters">
                    <SideFilters />
                    <div className="Shop__offers">
                        <OfferBanners />
                    </div>
                </div>
                <div className="shop__container__products">
                    <div className="products__grid">
                    
                    {
                        products && products.map(product => (
                            
                                <ProductCard key={product.id} product={product}/>
                            
                        ))
                    }

                    {
                        
                        !products && [1,2,3,4,5,6,7,8,9,10,11,12].map((n) => <ProductSkeleton key={n} />)
                        
                    }
                    

                    </div>
                </div> 
            </div>
            
                
            
        </div>
    )
}

export default ShopProducts
