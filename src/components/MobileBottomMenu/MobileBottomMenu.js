import React, { useState, useEffect } from 'react'
import './MobileBottomMenu.css'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Badge from '@material-ui/core/Badge';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';


// import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const MobileBottomMenu = () => {


    

    return (
        <div className="mobilebottommenu">
            <div className="mobilebottommenu__menu__items">
                
                <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/"
                    >
                {/* <HomeOutlinedIcon className="mobilebottommenu__menu__item__icon" /> */}
                <HomeOutlined className="mobilebottommenu__menu__item__icon" />
                
                </NavLink>

                <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/shop"
                    >
                    <Badge badgeContent={4} color="error">
                        <LocalMallOutlinedIcon className="mobilebottommenu__menu__item__icon" />
                    </Badge>
                </NavLink>


                <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/cart"
                    >
                    <Badge badgeContent={2} color="error">
                        <FavoriteBorderOutlinedIcon className="mobilebottommenu__menu__item__icon" />
                    </Badge>
                </NavLink>

                <NavLink
                    exact
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/profile"
                    >
                <UserOutlined className="mobilebottommenu__menu__item__icon" />
                {/* <PersonOutlineOutlinedIcon className="mobilebottommenu__menu__item__icon" /> */}
                </NavLink>
                
                    
                
                {/* <div className="mobilebottommenu__menu__item">
                    <LocalMallOutlinedIcon className="mobilebottommenu__menu__item__icon" />
                </div>
                <div className="mobilebottommenu__menu__item">
                    <PersonOutlineOutlinedIcon className="mobilebottommenu__menu__item__icon" />
                    
                </div>
                <div className="mobilebottommenu__menu__item">
                    <PersonOutlineOutlinedIcon className="mobilebottommenu__menu__item__icon" />
                </div> */}
            </div>
            
            
        </div>
    )
}

export default MobileBottomMenu
