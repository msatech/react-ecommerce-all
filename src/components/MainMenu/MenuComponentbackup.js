import React, { useState } from 'react'
import './MenuComponent.css'

import { HomeOutlined, AppstoreOutlined, ShoppingOutlined } from '@ant-design/icons';
import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';
import './openmenu.js'

function MenuComponent() {
 
    return (
          
      <div className="menucomponent">
       <div class="dropdown">
 
 <button class="btn dropdown-toggle" type="button" id="btnDropdownDemo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <ReorderOutlinedIcon className="icon__category" /> <span>Category</span> 
 </button>

 <div class="dropdown-menu" aria-labelledby="btnDropdownDemo">
    <div className="row">
      <div className="col-4 menu__category">
        <a class="dropdown-item">Mobiles & Tablets</a>

        <a class="dropdown-item">Electronics</a>

        <a class="dropdown-item">Women's Fashion</a>

        <a class="dropdown-item">Men's Fashion</a>

        <a class="dropdown-item">Kids Store</a>

        <a class="dropdown-item">Health & Grocery Essentials</a>

        <a class="dropdown-item">Bags & Luggage</a>

        <a class="dropdown-item">Home & Kitchen</a>

        <a class="dropdown-item">Protect Yourself</a>

        <a class="dropdown-item">Small Appliances</a>

        <a class="dropdown-item">Mobiles & Tablets</a>

        <a class="dropdown-item">Electronics</a>

        <a class="dropdown-item">Women's Fashion</a>

        <a class="dropdown-item">Men's Fashion</a>

        <a class="dropdown-item">Kids Store</a>



      </div>
      <div className="col-8">
        <div className="category__data">
            
            
            <div className="category__data__item">
              <a class="dropdown-item sub__category">Kids Store</a>
              <div className="subcategory__data__item">
              <a class="dropdown-item">Kids Store</a>

              <a class="dropdown-item">Kids Store</a>

              <a class="dropdown-item">Kids Store</a>

              <a class="dropdown-item">Kids Store</a>

              
              </div>
            </div>
            <a class="dropdown-item sub__category">Kids Store</a>
            <a class="dropdown-item sub__category">Kids Store</a>
            <a class="dropdown-item sub__category">Kids Store</a>
            <a class="dropdown-item sub__category">Kids Store</a>


       
            
        </div>
      </div>
    </div>
   

 </div>

</div>
      </div>
    )
}

export default MenuComponent
