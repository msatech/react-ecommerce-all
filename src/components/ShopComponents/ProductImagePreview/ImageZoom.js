import React from 'react'
import './ImageZoom.css';
import ReactImageMagnify from 'react-image-magnify';

const ImageZoom = ({imageurl}) => {
    return (
        <div className="imagezoom">
            

            <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: imageurl,
                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
                    
                },
                largeImage: {
                    src: imageurl,
                    width: 1200,
                    height: 1800
                    
                },
                lensStyle: {
                    background: 'hsla(0, 0%, 100%, .3)',
                    
                  },
                  enlargedImageContainerStyle: {
                    backgroundColor: 'white'
                    
                    
                  },
                  enlargedImageContainerDimensions: {
                    width: '200%',
                    height: '120%'
                }
                
            }} />
        </div>
    )
}

export default ImageZoom
