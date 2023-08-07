import React, { useState, useEffect } from 'react'

import './MainMenu.css';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import MenuComponent from './MenuComponent.js';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import audioWave from '../../icons/audio-wave.gif';


const { Search } = Input;
function MainMenu() {
   
    const [searchvalue, setSearchvalue] = useState('')
    const [ripple, setRipple] = useState()

    const category = [
        {
            'category':'mobile & Tablets',
            'cat_image': "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            "icon": "",
            'sub': [
                {
                    'name': 'Ziomi',
                    'url': '#',
                    'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                }
            ]
        },

        {
            'category':'Electronics',
            'cat_image': "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            'sub': [
                {
                    'name': 'Bridge',
                    'url': '#',
                    'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                },
                {
                    'name': 'Television',
                    'url': '#',
                    'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                }
            ]
        },

        {
            'category':"Men's Fashion",
            'cat_image': "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            'sub': [
                {
                    'name': 'Shirts',
                    'url': '#',
                    'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                },
                {
                    'name': 'Jackets',
                    'url': '#',
                    'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                }
            ]
        },


        {
            'category':"Women's Fashion",
            'cat_image': "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            'sub': [
                {
                    'name': 'Sarees',
                    'url': '#',
                    'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                },
                {
                    'name': 'Jackets',
                    'url': '#',
                    'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                },
                {
                    'name': 'Kurtas & Kurtis',
                    'url': '#',
                    'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                },
                {
                    'name': 'Lehenga Choli',
                    'url': '#',
                    'image': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                }
            ]
        },




        
    ]



    

    
    

    const suffix1 = (
        
        <AudioOutlined  onClick={SpeechRecognition.startListening}
          style={{
            fontSize: 16,
            color: '#FF2D55',
          }}
        />

        
      );

      const suffix2 = (
        <img style={{height:"30px"}} src={audioWave} />
      )


      
      const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

      useEffect(() => {
        if (transcript !== '') {
          setSearchvalue(transcript);
        }
        if (listening){
            setRipple(suffix2)
            
        }else{
            setRipple(suffix1)

        }
      }, [transcript, listening]);
    

        // Speech Recognisation Code

        
        
          if (!browserSupportsSpeechRecognition) {
            return <span>Browser doesn't support speech recognition.</span>;
          }

          
        

          
     
         

    const onSearch = value => console.log(value);
    
    return (
        <div className="mainmenu">
            <div className="container-menu">
            <div className="mainmenu__left">
                <div className="mainmenu__logo">
                    <h1 className="logo"><img src="https://www.alphacs.in/static/alphacs/images/alphaimg/alpha.svg" alt="logo" style={{width: '40px', height: '30px' }} /></h1>
                </div>
                <div className="mainmenu__options">
                    
                    <MenuComponent categories={category} />
                    
                </div>
            </div>
            
            <div className="mainmenu__right">
            <Search className="search__button"
                placeholder="input search  text"
                enterButton="Search"
                size="large"
                type="text"
                value={searchvalue}
                
                suffix={ripple}
                onSearch={onSearch}
                onChange={(e) => {setSearchvalue(e.target.value)}}
            />
            </div>
            </div>
            
        </div>
    )
}

export default MainMenu
