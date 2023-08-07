import React from 'react'
import './ProductCat.css'

import {CircularCategorySkeleton} from '../../SkeletonStructure/ProductSkeleton.js'
const ProductCat = ({productCategory}) => {
    

    
    return (
        <div className="productcat">
            {
                productCategory && productCategory.map(category => (
                    <div className="product__category">
                        <div className="product__item">
                            <img src={category.categoryImg} alt="" />
                            <p>{category.name}</p>
                        </div>
                    </div>
                ))
            }

            {
                !productCategory && [1,2,3,4,5,6,7,8].map((n) =>   <CircularCategorySkeleton key={n} />)
            }
            
            
            
           
        </div>
    )
}

export default ProductCat
