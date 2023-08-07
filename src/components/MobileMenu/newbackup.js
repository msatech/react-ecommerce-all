import React, { useState, useEffect } from 'react'

import { Drawer } from 'antd';
import './MobileMenu.css'
import { Dehaze, Close, Search, Apps } from '@material-ui/icons';

import {Tabs } from 'antd';


import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import SearchIcon from '@material-ui/icons/Search';

function MobileMenu() {



    return (
        <div className="mobilemenu">
    
      <div className="mobilemenu__navbar">
           
            <div className="mobilemenu__left">
                <div className="mobilemenu__option">

                
                <a class="btn" type="button" style={{marginLeft:"-25px"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><Dehaze className="mobilemenu__search__icon" /></a>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
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
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                  </div>
                 

                  </div>
                </div>

               
              
                   
                  
                </div>
                    
            </div>
            <div>
              <img className="mobilemenu__logo" src={process.env.PUBLIC_URL + './img/logo.svg'} alt="logo" />
              </div>
            <div className="mobilemenu__right">
            
                <div className="mobilemenu__option">
                    
                            <SearchIcon className="mobilemenu__search__icon" />
                    
                </div>
                
                
            
                
            </div>
            
            
      </div>

      
        </div>
    )
}

export default MobileMenu
