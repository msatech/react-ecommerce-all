import React, { useState, useEffect } from 'react'


import './MobileMenu.css'
import { Dehaze, Search, Apps, ContactsOutlined } from '@material-ui/icons';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import { HomeOutlined, FastfoodOutlined, SportsEsportsOutlined, BookOutlined, LaptopChromebookOutlined, FitnessCenterOutlined, ChildCareOutlined , AddCircle} from '@material-ui/icons';


function MobileMenu() {
  const [showsearch, setShowSearch] = useState(false)
  
    return (
        <div className="mobilemenu">
    
      <div className="mobilemenu__navbar">
           
            <div className="mobilemenu__left">
                <div className="mobilemenu__option">

                
                <a class="btn" type="button" style={{marginLeft:"-25px"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><Dehaze className="mobilemenu__search__icon" /></a>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" >
                  <div class="offcanvas-header">
                  
                    <div className="search__input">
                        <Search />
                        <input type="text" placeholder="Search Cateogory" />
                    </div>
                    
                  
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">

                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><Dehaze /> Menu</button>
                      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><Apps /> Categories</button>
                      
                    </div>
                  </nav>
                  <div class="tab-content" id="nav-tabContent">
                    {/* Menu Section  */}
                    <h6 className="menu__mobile__title">Menu</h6>
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="tab__menu__items">
                          <div className="tab__menu__item">Home <ArrowForwardIosIcon className="mobilemenu__forward__icon" /></div>
                          <div className="tab__menu__item">Features <ArrowForwardIosIcon className="mobilemenu__forward__icon" /></div>
                          <div className="tab__menu__item">Products <ArrowForwardIosIcon className="mobilemenu__forward__icon" /></div>
                          <div className="tab__menu__item">Shop <ArrowForwardIosIcon className="mobilemenu__forward__icon" /></div>
                          <div className="tab__menu__item">Blog <ArrowForwardIosIcon className="mobilemenu__forward__icon" /></div>
                          <div className="tab__menu__item">Pages <ArrowForwardIosIcon className="mobilemenu__forward__icon" /></div>
                        </div>
                    </div>
                    {/* Category Section */}
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="tab__category__menu__items">
                          <div className="tab__category__menu__item"><HomeOutlined className="mobile__category__menu__icon" /> Home & Garden</div>
                          <div className="tab__category__menu__item"><FastfoodOutlined className="mobile__category__menu__icon" /> Food & Meats</div>
                          <div className="tab__category__menu__item"><SportsEsportsOutlined className="mobile__category__menu__icon" /> Toys & Hobbies</div>
                          <div className="tab__category__menu__item"><LaptopChromebookOutlined className="mobile__category__menu__icon" /> Books & Newspapers</div>
                          <div className="tab__category__menu__item"><FitnessCenterOutlined className="mobile__category__menu__icon" /> Fashion & Jewellery</div>
                          <div className="tab__category__menu__item"><HomeOutlined className="mobile__category__menu__icon" /> Electronics & Computer</div>
                          <div className="tab__category__menu__item"><ChildCareOutlined className="mobile__category__menu__icon" /> Labor Products</div>
                          <div className="tab__category__menu__item"><FastfoodOutlined className="mobile__category__menu__icon" /> Sports & Outdoors</div>
                          <div className="tab__category__menu__item"><BookOutlined className="mobile__category__menu__icon" /> BabyCare</div>
                          <div className="tab__category__menu__item"><AddCircle className="circle__icon" /> All Stores</div>
                        </div>
                    </div>
                    
                  </div>
                 

                  </div>

                  <div className="offcanvas-footer">
                      <FacebookIcon className="offcanvas__footer__icon" />
                      <InstagramIcon className="offcanvas__footer__icon" />
                      <TwitterIcon className="offcanvas__footer__icon" />
                      <YouTubeIcon className="offcanvas__footer__icon" />
                  </div>
                </div>

               
              
                   
                  
                </div>
                    
            </div>
            <div>
              <img className="mobilemenu__logo" src={process.env.PUBLIC_URL + './img/logo.svg'} alt="logo" />
              </div>
            <div className="mobilemenu__right">
            
                <div className="mobilemenu__option">
                    
                            <SearchIcon className="mobilemenu__search__icon" onClick={() => setShowSearch(!showsearch) } />
                    
                </div>
                
                
            
                
            </div>
            
            
      </div>
      <div  className={`mobilemenu__search__filed ${showsearch} `} >
        
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control search-field" placeholder="Search" />
          </div>
        
       
      </div>

      
        </div>
    )
}

export default MobileMenu
