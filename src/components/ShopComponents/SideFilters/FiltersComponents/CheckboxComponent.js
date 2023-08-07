import React from 'react'
import { Checkbox, Divider } from 'antd';
import './CheckboxComponent.css'

const CheckboxGroup = Checkbox.Group;

const CheckboxComponent = () => {
    const plainOptions = ['Under $500', '$500 - $750 ', '$750 - $1000', ' $1000 - $1500 ', ' Above $1500 '];
    const defaultCheckedList = ['Apple', 'Orange'];
    const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);
    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
      };
    
      const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      };
    return (
        <div className="checkbox">
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Check all
            </Checkbox>
            <Divider />
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </div>
    )
}

export default CheckboxComponent
