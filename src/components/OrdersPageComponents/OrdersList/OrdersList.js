import React from 'react'
import OrdersSingleView from '../OrdersSingleView/OrdersSingleView'
import './OrdersList.css'

const OrdersList = () => {
    return (
        <div className="orderslist">
            <OrdersSingleView />
            <OrdersSingleView />
            
        </div>
    )
}

export default OrdersList
