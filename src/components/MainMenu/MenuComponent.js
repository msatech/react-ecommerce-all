import React, { useState } from 'react'
import './MenuComponent.css'

import { HomeOutlined, AppstoreOutlined, ShoppingOutlined } from '@ant-design/icons';
import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';
import './openmenu.js'

function MenuComponent({categories}) {
  // const [cactegory, setCategory] = useState([])
  const [subcategory, setSubcategory] = useState([])
  const [active, setActive] = useState(false)
  // const category = categories.map((category) => {
  //   console.log(category.category)
  // })
  // console.log(categories)

 

    return (
          
      <div className="menucomponent">
       <div class="dropdown">
 
            <button class="btn dropdown-toggle" type="button" id="btnDropdownDemo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <ReorderOutlinedIcon className="icon__category" /> <span>Category</span> 
            </button>

            <div class="dropdown-menu" aria-labelledby="btnDropdownDemo">
                <div className="row">
                  <div className="col-3 menu__category">
                    {
                      categories.map(category => (
                        <a class="dropdown-item" onMouseEnter={e => setSubcategory([...category.sub])}>{category.category}</a>

                      ))
                    }
                    
                    

                  </div>
                  <div className="col-9">
                    <div className="category__data">
                        
                        {
                          subcategory.map(sub => (
                            <div className="category__data__item"><a class="dropdown-item">{sub.name}</a></div>
                          ))
                        }
                        
                        
                  

                  
                        
                    </div>
                  </div>
                </div>
              

            </div>

</div>
      </div>
    )
}

export default MenuComponent
