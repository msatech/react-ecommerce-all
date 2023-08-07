import React from 'react'
import './OfferBanners.css'
const OfferBanners = () => {
    return (
        <div className="offerbanners">
            <div className="d-flex justify-content-center align-items-center container">
            <div className="d-flex card text-center">
                <div className="image"><img src="https://i.imgur.com/DC94rZe.png" width="150" /></div>
                <div className="image2"><img src="https://i.imgur.com/DC94rZe.png" width="150" /></div>
                <h1>50% OFF</h1><span className="d-block">On Everything</span><span className="d-block">Today</span>
                <div className="mt-4"><small>With Code : ALPHA50</small></div>
            </div>
        </div>
        </div>
    )
}

export default OfferBanners
