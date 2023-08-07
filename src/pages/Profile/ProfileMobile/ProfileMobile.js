import React from 'react';
import './ProfileMobile.css'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';

const ProfileMobile = () => {
    return (
        <div className="profilemobile">
            <div className="profilemobile__top__section">
                <div className="profilemobile__top__section__grey"></div>
                <div className="profilemobile__top__section__white">
                    <button className="profilemobile__top__section__login__button">
                        LOG IN / SIGN UP
                    </button>
                </div>
                <div className="profilemobile__top__section__profile">
                    <Avatar variant="square" className="profilemobile__top__section__profile__image" >
                        
                    </Avatar>

                </div>
            </div>

        {/* Make New Component for orders wishlist to use dynamicaly */}
            <div className="profilemobile__orders__and__profile__section">
                <div className="profilemobile__orders__and__profile__section__item">

                    <div className="profilemobile__orders__and__profile__section__item__left">
                        <div className="profilemobile__orders__and__profile__section__item__icon">
                            <StoreOutlinedIcon />
                        </div>
                        <div className="profilemobile__orders__and__profile__section__item__info">
                            <div className="profilemobile__orders__and__profile__section__item__info__title">
                                Orders
                            </div>
                            <div className="profilemobile__orders__and__profile__section__item__info__description"> Check your order status</div>
                        </div>
                    </div>
                    <div className="profilemobile__orders__and__profile__section__item__right">
                        <div className="profilemobile__orders__and__profile__section__item__nextarrow">
                            <NavigateNextOutlinedIcon />
                        </div>
                    </div>


                </div>

                <div className="profilemobile__orders__and__profile__section__item">

                    <div className="profilemobile__orders__and__profile__section__item__left">
                        <div className="profilemobile__orders__and__profile__section__item__icon">
                            <HelpOutlineOutlinedIcon />
                        </div>
                        <div className="profilemobile__orders__and__profile__section__item__info">
                            <div className="profilemobile__orders__and__profile__section__item__info__title">
                                Help Center
                            </div>
                            <div className="profilemobile__orders__and__profile__section__item__info__description"> Help regarding your recent purchases</div>
                        </div>
                    </div>
                    <div className="profilemobile__orders__and__profile__section__item__right">
                        <div className="profilemobile__orders__and__profile__section__item__nextarrow">
                            <NavigateNextOutlinedIcon />
                        </div>
                    </div>

                </div>

                <div className="profilemobile__orders__and__profile__section__item">

                    <div className="profilemobile__orders__and__profile__section__item__left">
                        <div className="profilemobile__orders__and__profile__section__item__icon">
                            <FavoriteBorderOutlinedIcon />
                        </div>
                        <div className="profilemobile__orders__and__profile__section__item__info">
                            <div className="profilemobile__orders__and__profile__section__item__info__title">
                                Wishlist
                            </div>
                            <div className="profilemobile__orders__and__profile__section__item__info__description"> Your most loved products</div>
                        </div>
                    </div>
                    <div className="profilemobile__orders__and__profile__section__item__right">
                        <div className="profilemobile__orders__and__profile__section__item__nextarrow">
                            <NavigateNextOutlinedIcon />
                        </div>
                    </div>

                </div>
            </div>




            <div className="profilemobile__orders__and__profile__section">
                
                <div className="profilemobile__orders__and__profile__section__item">

                    <div className="profilemobile__orders__and__profile__section__item__left">
                        <div className="profilemobile__orders__and__profile__section__item__icon">
                            <AccountBalanceWalletOutlinedIcon />
                        </div>
                        <div className="profilemobile__orders__and__profile__section__item__info">
                            <div className="profilemobile__orders__and__profile__section__item__info__title">
                                Refer and Earn
                            </div>
                            
                        </div>
                    </div>
                    <div className="profilemobile__orders__and__profile__section__item__right">
                        <div className="profilemobile__orders__and__profile__section__item__nextarrow">
                            <NavigateNextOutlinedIcon />
                        </div>
                    </div>


                </div>

                <div className="profilemobile__orders__and__profile__section__item">

                    <div className="profilemobile__orders__and__profile__section__item__left">
                        <div className="profilemobile__orders__and__profile__section__item__icon">
                            <CropFreeOutlinedIcon />
                        </div>
                        <div className="profilemobile__orders__and__profile__section__item__info">
                            <div className="profilemobile__orders__and__profile__section__item__info__title">
                                Scan for Coupons
                            </div>
                           
                        </div>
                    </div>
                    <div className="profilemobile__orders__and__profile__section__item__right">
                        <div className="profilemobile__orders__and__profile__section__item__nextarrow">
                            <NavigateNextOutlinedIcon />
                        </div>
                    </div>

                </div>

                
            </div>
            
            <NavLink exact to="/">
                <div className="profilemobile__backarrow">
                    <ArrowBackOutlinedIcon className="profilemobile__backarrow__icon" />
                </div>
            </NavLink>
        </div>
    );
};

export default ProfileMobile;