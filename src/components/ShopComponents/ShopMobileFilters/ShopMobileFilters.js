import React from 'react'
import './ShopMobileFilters.css'
import SideFilters from '../SideFilters/SideFilters.js'

const ShopMobileFilters = () => {
    return (
        <div className="shopmobilefilters">

            <button class="btn shopmobile__toggle__btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdropfilter" aria-controls="offcanvasWithBackdrop"><i class="fa fa-filter"></i></button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdropfilter" aria-labelledby="offcanvasWithBackdropLabel">
            <div class="offcanvas-header">
                <h5 style={{fontWeight: "600"}}>Shop By</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" style={{marginTop: "-40px"}}>
                <SideFilters />
            </div>
            </div>

        </div>
    )
}

export default ShopMobileFilters
