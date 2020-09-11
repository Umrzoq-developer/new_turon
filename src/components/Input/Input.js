import React from "react";
import { Input } from 'antd';
import './Input.scss'

const InputC = ({placeholderName, labelText, requiredInput, typeName, value, handleChange, prefixSelect, myClass, innerLabel}) => {
    const randId = 'label' + Math.floor(Math.random() * 10000);
    return(
        <div className={`defaultInput ${myClass}`}>
            {
                innerLabel && <span className='InnerText'>{innerLabel}</span>
            }
            <label htmlFor={randId}>
                {labelText}
                {
                    requiredInput && <span className='required' />
                }
            </label>
            <Input addonBefore={prefixSelect} onChange={handleChange} value={value} placeholder={placeholderName} id={randId} type={typeName} />
        </div>
    )
};

export default InputC;