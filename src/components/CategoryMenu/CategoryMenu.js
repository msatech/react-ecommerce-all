import React from 'react'
import { HomeOutlined, FastfoodOutlined, SportsEsportsOutlined, BookOutlined, LaptopChromebookOutlined, FitnessCenterOutlined, ChildCareOutlined , AddCircle} from '@material-ui/icons';
import './CategoryMenu.css';
import {Link} from 'react-router-dom';

function CategoryMenu() {
    return (
        <div className="category__menu">
            <div className="category__menu__categories">
                <div className="Category__menu__category">
                    <HomeOutlined /> <Link to="/shop"><span class="Category__menu__category__title">Home & Gardern</span></Link> 
                </div>
                <div className="Category__menu__category">
                    <FastfoodOutlined /> <span class="Category__menu__category__title">Food & Meats </span>
                </div>
                <div className="Category__menu__category">
                    <SportsEsportsOutlined /> <span class="Category__menu__category__title">Toys & Hobbies </span>
                </div>
                <div className="Category__menu__category">
                    <BookOutlined />  <span class="Category__menu__category__title">Home & Gardern</span>
                </div>
                <div className="Category__menu__category">
                    <LaptopChromebookOutlined />  <span class="Category__menu__category__title">Books & Newspaper</span>
                </div>
                <div className="Category__menu__category">
                    <FitnessCenterOutlined />  <span class="Category__menu__category__title">Fasshion & Jewellery</span>
                </div>
                <div className="Category__menu__category">
                    <ChildCareOutlined />   <span class="Category__menu__category__title">Labour Products</span>
                </div>
                <div className="Category__menu__category">
                    <FastfoodOutlined />  <span class="Category__menu__category__title">Sports & Outdoors</span>
                </div>
                <div className="Category__menu__category">
                    <BookOutlined />  <span class="Category__menu__category__title">Baby Care</span>
                </div>
                <div className="Category__menu__category">
                    <AddCircle className="circle__icon" />  <span class="Category__menu__category__title">All Stores</span>
                </div>

            </div>
        </div>
    )
}

export default CategoryMenu
