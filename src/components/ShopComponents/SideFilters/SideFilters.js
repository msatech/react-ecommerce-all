import React from 'react'
import './SideFilters.css'
import { Collapse } from 'antd';
import CheckboxComponent from './FiltersComponents/CheckboxComponent.js';

const { Panel } = Collapse;
const SideFilters = () => {
    
    function callback(key) {
        console.log(key);
      }
      
      const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      `;

    return (
        <div className="sidefilter">
            
            <Collapse className="collapse__container" defaultActiveKey={['1']} onChange={callback}>
                <h4 style={{fontWeight:"600"}}>Shop By</h4>
                <Panel className="collapse__item" header="Sizes" key="1">
                    <p>Sizes</p>
                    <div className="sizes__items">
                        <a className="shadow sizes__item" >S</a>
                        <a className="sizes__item" >M</a>
                        <a className="sizes__item" >LG</a>
                        <a className="sizes__item" >XL</a>
                        <a className="sizes__item" >XXL</a>
                        <a className="sizes__item" >XXXL</a>
                    </div>
                </Panel>
                <Panel className="collapse__item"    header="Brands" key="2">
                    <p> Top Brands </p>
                    <div className="brands__items">
                        <a> Adidas </a>
                        <a> Apple </a>
                        <a> Micromax </a>
                        <a> Samsung </a>
                        <a> Ziomi </a>
                        <a> Nokia </a>
                        <a> Tenor D </a>
                        <a> Asus </a>
                        <a> Oneplus </a>
                    </div>
                    
                </Panel>
                <Panel className="collapse__item" header="Materials" key="3">
                    <p> Materials </p>
                    <div className="brands__items">
                        <a> Cotton </a>
                        <a> Plastic </a>
                        <a> Fibers </a>
                        <a> Iron </a>
                        
                    </div>
                </Panel>
                <Panel className="collapse__item" header="Price" key="4">
                    <p> Price </p>
                    <CheckboxComponent />
                </Panel>
                <Panel className="collapse__item" header="Discount" key="5">
                    <p>{text}</p>
                </Panel>
                <Panel className="collapse__item" header="Colors" key="6">
                    <p>Colors</p>
                    <div className="colors__items">
                       <a className="colors__item" style={{backgroundColor: "red"}}></a>
                        <a className="colors__item" style={{backgroundColor: "green"}}></a>
                        <a className="colors__item" style={{backgroundColor: "black"}}></a>
                        <a className="colors__item" style={{backgroundColor: "yellow"}}></a>
                    </div>
                    
                </Panel>
            </Collapse>
        </div>
    )
}

export default SideFilters
