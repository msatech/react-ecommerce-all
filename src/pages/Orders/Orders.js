import React from 'react'
import './Orders.css'
import { SearchOutlined } from '@ant-design/icons';
import OrdersList from '../../components/OrdersPageComponents/OrdersList/OrdersList';


const Orders = () => {
    return (
        <div className="orders__page">
           <h4>My Orders</h4> 
           <div className="orders__page__orders__section">
               <div className="card orders__top__title__card">
                   <div className="orders__lists">
                        <ul class="nav nav-pills" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"  role="tab"  aria-controls="pills-home" aria-selected="true">Shopping Orders</button>
                            </li>
                            

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-cancelled-tab" data-bs-toggle="pill" data-bs-target="#pills-cancelled"  role="tab" aria-controls="pills-cancelled" aria-selected="false">Cancelled Orders</button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile" aria-selected="false">Deals</button>
                            </li>
                            
                        </ul>
                   </div>

                   
                   

                    <div className="orders__page__orders__search">
                        <div className="orders__search">
                        <SearchOutlined />
                            <input type="text" className="orders__search__search__input" placeholder="Enter Order ID" />
                        </div>
                        
                    </div>
                    
               </div>
               <div className="card__content">
                    <div class="tab-content" id="pills-tabContent">

                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <OrdersList />
                        </div>

                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">data</div>

                        <div class="tab-pane fade" id="pills-cancelled" role="tabpanel" aria-labelledby="pills-cancelled-tab"> 
                            <OrdersList />
                        </div>
                        
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Orders
