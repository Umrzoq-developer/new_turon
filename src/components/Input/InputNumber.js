import React from "react";
import {InputNumber} from "antd";
import './InputNumber.scss';

const Inputnumber = ({label, requiredInput, extraClass, defaultValue}) => {
    const randId = 'label' + Math.floor(Math.random() * 10000);

    const onChange = (value) => {
        console.log(value);
    };

    return (
        <div className='numberInputContainer'>
            {
                label && <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                    {label} <span className='required'/>  {requiredInput && <span className='required' />}
                </label>
            }


            <InputNumber
                min={0.00}
                defaultValue={defaultValue}
                // formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                step={0.1}
                className={`InputNumber ${extraClass}`}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
            />
        </div>

    )
};

export default Inputnumber;