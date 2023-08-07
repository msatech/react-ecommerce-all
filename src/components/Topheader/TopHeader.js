import React from 'react'
import './TopHeader.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';

import { Avatar, Image } from 'antd';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
function TopHeader() {
    return (
        <div className="topheader">
            <div className="topheader__main">
                <div className="topheader__logo">
                    <h3>Alpha Cyber Solution</h3>
                </div>
                <div className="topheader__right">
                    <div className="topheader__options">
                        <a className="topheader__option">My Wishlist (0)</a>
                        <a className="topheader__option">Track Your Order</a>
                        <a className="topheader__option">Checkout</a>
                        <a className="topheader__option">Terms of use</a>
                        <a className="topheader__option"> <span className="topheader__option__signin">Log in</span> or <span className="topheader__option__signin">Sign up</span> </a>
                    </div>
                    <div className="topheader__cart">
                    {/* <Badge badgeContent={40} color="error">
                        <ShoppingCartOutlinedIcon className="topheader__cart__icon dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"/>
                    </Badge> */}


                        <div class="dropdown-cart">
                            
                            <Badge badgeContent={40} color="error">
                        <ShoppingCartOutlinedIcon className="topheader__cart__icon dropdown-toggle dropbtn"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"/>
                    </Badge>
                            <div class="dropdown-content">
                            <a href="#">
                                <div className="dropdown__product">
                                    <div className="product__image">
                                        <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597763166-41CRnvYqmqL.jpg?crop=1xw:1.00xh;center,top&resize=480:*" alt="" />
                                    </div>
                                    <div className="product__desc">
                                        <p className="product__desc__title">National Fresh Fruit</p>
                                        <p className="product__desc__price">$85.00</p> 
                                        <p className="product__desc__quantity">Qty: 1</p>
                                        
                                        
                                    </div>
                                    <div className="product__action">
                                       
                                        <CancelOutlinedIcon className="product__action__delete" />
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                            <div className="dropdown__product">
                                    <div className="product__image">
                                        <img src="https://m.media-amazon.com/images/G/01/sell/images/Anker-01._CB1580163796_.jpg" alt="fakeproduct-5" />
                                    </div>
                                    <div className="product__desc">
                                        <p className="product__desc__title">National Fresh Fruit</p>
                                        <p className="product__desc__price">$85.00</p> 
                                        <p className="product__desc__quantity">Qty: 1</p>
                                        
                                        
                                    </div>
                                    <div className="product__action">
                                        
                                        <CancelOutlinedIcon className="product__action__delete" />
                                    </div>
                                </div>    
                            </a>
                            <a href="#">
                            <div className="dropdown__product">
                                    <div className="product__image">
                                        <img src="https://www.bigw.com.au/medias/sys_master/images/images/hb3/h99/28018464096286.jpg" alt="" />
                                    </div>
                                    <div className="product__desc">
                                        <p className="product__desc__title">National Fresh Fruit</p>
                                        <p className="product__desc__price">$85.00</p> 
                                        <p className="product__desc__quantity">Qty: 1</p>
                                        
                                        
                                    </div>
                                    <div className="product__action">
                                        
                                        <CancelOutlinedIcon className="product__action__delete" />
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                            <div className="dropdown__product">
                                    <div className="product__image">
                                        <img src="https://www.bigw.com.au/medias/sys_master/images/images/hb3/h99/28018464096286.jpg" alt="" />
                                    </div>
                                    <div className="product__desc">
                                        <p className="product__desc__title">National Fresh Fruit</p>
                                        <p className="product__desc__price">$85.00</p> 
                                        <p className="product__desc__quantity">Qty: 1</p>
                                        
                                        
                                    </div>
                                    <div className="product__action">
                                        
                                        <CancelOutlinedIcon className="product__action__delete" />
                                    </div>
                                </div>
                            </a>

                            <a href="#">
                            <div className="dropdown__product">
                                    <div className="product__image">
                                        <img src="https://www.bigw.com.au/medias/sys_master/images/images/hb3/h99/28018464096286.jpg" alt="" />
                                    </div>
                                    <div className="product__desc">
                                        <p className="product__desc__title">National Fresh Fruit</p>
                                        <p className="product__desc__price">$85.00</p> 
                                        <p className="product__desc__quantity">Qty: 1</p>
                                        
                                        
                                    </div>
                                    <div className="product__action">
                                        
                                        <CancelOutlinedIcon className="product__action__delete" />
                                    </div>
                                </div>
                            </a>

                            <a href="#">
                            <div className="dropdown__product">
                                    <div className="product__image">
                                        <img src="https://www.bigw.com.au/medias/sys_master/images/images/hb3/h99/28018464096286.jpg" alt="" />
                                    </div>
                                    <div className="product__desc">
                                        <p className="product__desc__title">National Fresh Fruit</p>
                                        <p className="product__desc__price">$85.00</p> 
                                        <p className="product__desc__quantity">Qty: 1</p>
                                        
                                        
                                    </div>
                                    <div className="product__action">
                                        
                                        <CancelOutlinedIcon className="product__action__delete" />
                                    </div>
                                </div>
                            </a>

                            <a href="">
                                <div className="dropdownn__checkout__section">
                                    <div className="dropdownn__checkout__viewcart">
                                        <button className="btn">View Cart</button>
                                    </div>
                                    <div className="dropdownn__checkout__checkout">
                                        <button className="btn">Checkout</button>

                                    </div>
                                </div>
                            </a>
                            </div>
                            
                        </div>
                    
                    
                    
                        
                        <a>$1000</a>
                        <Avatar
                        src={<Image src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-3.png" />}
                    />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default TopHeader
