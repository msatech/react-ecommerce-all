import React, {useState, useEffect} from 'react'
import './ShopPractice.css'

import {ProductSkeleton} from '../../SkeletonStructure/ProductSkeleton.js'

const ShopPractice = () => {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setArticles(data);
        }, 1000)
    })
    
    

    return (
        
        <div className="shoppractice">
           
            {
                articles && articles.map(article => (
                    <div className="article" key={article.id} > 
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                    </div>
                ))
            }

            {
                articles && [1,2,3,4,5,6,7,8].map((n) =>   <ProductSkeleton key={n} />)

                
            }
        </div>
    )
}

export default ShopPractice
