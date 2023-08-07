import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './ProductSkleton.css'
export const ProductSkeleton = () => {
    return (
        <div className="product__skeleton">
            <div className='product'>
            <div className="section-title">
                <Skeleton width={`70%`} height={130} />
            </div>
            <div className="card-metrics">
                <Skeleton width={`90%`} />
                <Skeleton width={`90%`} />
                <div className="skeleton__bottom">
                <Skeleton className="skeleton__bottom__item" width={`50%`} />
                <Skeleton className="skeleton__bottom__item" width={`50%`} />
                </div>
                
            </div>
            
        </div>
        </div>
    )
}


export const CircularCategorySkeleton = () => {
    return (
        
            <div>
                <p className="section-title">
                <Skeleton circle={true} width={100} height={100}/>
            </p>
            
    
        </div>
    )
}

