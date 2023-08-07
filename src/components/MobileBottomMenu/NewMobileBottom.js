import React from 'react'
import './NewMobileBottom.css'
function NewMobileBottom() {
    return (
        <div className="newmobilebottom">
            <div class="tabs">

                <input type="radio" name="tab" id="tab-01" checked />
                <label for="tab-01">
                    <svg>
                        <use href="#icon-01" xlinkHref="#icon-01" class="icon" />
                        <use href="#icon-01" xlinkHref="#icon-01" class="icon" />
                        <use href="#icon-01" xlinkHref="#icon-01" class="icon" />
                        <use href="#icon-01" xlinkHref="#icon-01" class="icon" />
                        <use href="#icon-01" xlinkHref="#icon-01" class="icon" />
                    </svg>
                </label>

                <input type="radio" name="tab" id="tab-02" />
                <label for="tab-02">
                    <svg>
                        <use href="#icon-02" xlinkHref="#icon-02" class="icon" />
                        <use href="#icon-02" xlinkHref="#icon-02" class="icon" />
                        <use href="#icon-02" xlinkHref="#icon-02" class="icon" />
                        <use href="#icon-02" xlinkHref="#icon-02" class="icon" />
                        <use href="#icon-02" xlinkHref="#icon-02" class="icon" />
                    </svg>
                </label>

                <input type="radio" name="tab" id="tab-03" />
                <label for="tab-03">
                    <svg>
                        <use href="#icon-03" xlinkHref="#icon-03" class="icon" />
                        <use href="#icon-03" xlinkHref="#icon-03" class="icon" />
                        <use href="#icon-03" xlinkHref="#icon-03" class="icon" />
                        <use href="#icon-03" xlinkHref="#icon-03" class="icon" />
                        <use href="#icon-03" xlinkHref="#icon-03" class="icon" />
                    </svg>
                </label>

                <input type="radio" name="tab" id="tab-04" />
                <label for="tab-04">
                    <svg>
                        <use href="#icon-04" xlinkHref="#icon-04" class="icon" />
                        <use href="#icon-04" xlinkHref="#icon-04" class="icon" />
                        <use href="#icon-04" xlinkHref="#icon-04" class="icon" />
                        <use href="#icon-04" xlinkHref="#icon-04" class="icon" />
                        <use href="#icon-04" xlinkHref="#icon-04" class="icon" />
                    </svg>
                </label>
            </div>



            <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="icon-01">
                    <path d="M9.82,1.5A11.13,11.13,0,0,0,1.5,12.33a11.08,11.08,0,0,0,11,11.17,11.08,11.08,0,0,0,11-11.17A11.16,11.16,0,0,0,16.33,1.86V12.33a3.9,3.9,0,1,1-.08-.78" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="icon-02">
                    <path d="M18.16,23.5h2.16a3.19,3.19,0,0,0,3.18-3.18V4.68A3.19,3.19,0,0,0,20.32,1.5H8.81l0,4.19A3.15,3.15,0,1,1,5.69,8.83H1.5V20.32A3.19,3.19,0,0,0,4.68,23.5h8.83s-.49-5.76,4.75-8.38" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="icon-03">
                    <path d="M14.6,5.13V4.68A3.19,3.19,0,0,0,11.42,1.5H4.68A3.19,3.19,0,0,0,1.5,4.68V20.32A3.19,3.19,0,0,0,4.68,23.5H20.32a3.19,3.19,0,0,0,3.18-3.18V12.53a3.19,3.19,0,0,0-3.18-3.17H6.77" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" id="icon-04">
                    <path d="M4,23.5a11,11,0,0,1,17,0" />
                    <path d="M15.66,10.5a3.16,3.16,0,0,1-6.32,0H3.5a9,9,0,1,1,2.87,6.59" />
                </symbol>
            </svg>

        </div>
    )
}

export default NewMobileBottom
