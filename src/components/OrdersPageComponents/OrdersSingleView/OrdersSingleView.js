import React from 'react'
import './OrdersSingleView.css'
import { DownOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
const OrdersSingleView = () => {
    // Popup Content (Delivery Address Of User)
    const content = (
        <div>
            H.no 789 Sanjay colony sector 23 Faridabad <br />
            Faridabad, Haryana 121002  <br />
            India <br />
            Phone: 7898789878 <br />
        </div>
      );

    // End Popup data

    return (
        <div className="orderssingleview">
            <div class="card orderssingleview__card">
                <div class="card-header orderssingleview__card__header">

                    <div className="orderssingleview__card__header__left">
                        <p className="orderssingleview__card__header__left__orders__number">Order No. 83086650454</p>
                        <p className="orderssingleview__card__header__left__orders__date">2 Sept 2021, 6:41 pm</p>
                    </div>
                    <div className="shipping__details">
                        <p>Ship To :</p>
                        <Popover content={content} placement="bottom" title="Manpreet Singh">
                            <p className="shipping__details__person">Manpreet Singh <DownOutlined className="shipping__details__person__view__more__icon" /></p>
                        </Popover>
                       
                   </div>
                    <div className="orderssingleview__card__header__right">
                        <h5>Order Total <span className="orderssingleview__card__header__right__order__amount">&#x20B9; 2</span></h5>
                    </div>

                </div>
                <div class="card-body">

                    <div className="orderssingleview__product">
                        <div className="orderssingleview__product__image">
                            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/546080/1617033471815.jpg?imwidth=414&impolicy=hq" alt="" />
                        </div>
                        <div className="orderssingleview__product__info">
                            <div className="product__info__status">
                                <p className="product__status">Delivered 26-Jul-2021</p>
                                <p className="product__title">AmazonBasics High-Speed HDMI Cable - 10 Feet (Latest Standard) - Supports Ethernet, 3D, 4K video,Black</p>
                            </div>
                            <div className="product__price">
                                <span className="orderssingleview__product__info__product__price">&#x20B9; 2</span>
                            </div>
                        </div>
                    </div>

                    <div className="orderssingleview__product__actions">
                        <button className="product__action__button">Return or replace items</button>
                        <button className="product__action__button">Track package</button>
                        <button className="product__action__button">Product Review</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrdersSingleView
