import React from 'react'
import { Carousel } from 'antd';
import './TopSlider.css';
function TopSlider() {
    const contentStyle = {
        height: '300px',
        width: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        borderRadius:'6px',
        
      };
    return (
        <div className="topslider">
            <Carousel autoplay effect="scrollx" className="topslider__carousel">
            <div>
                <img src={process.env.PUBLIC_URL + './img/banner1.png'} style={contentStyle} />
            </div>
            <div>
                <img src="https://rukminim1.flixcart.com/flap/1200/1400/image/1489831949fc2d87.jpg?q=50" style={contentStyle} />

            </div>
            <div>
                <img src="https://rukminim1.flixcart.com/flap/5000/5000/image/a49482708bb1b1da.jpg?q=50" style={contentStyle} />

            </div>
            <div>
                <img src="https://rukminim1.flixcart.com/flap/5000/5000/image/5e130368e516d7c1.jpeg?q=50" style={contentStyle} />

            </div>
        </Carousel>
            </div>
    )
}

export default TopSlider
