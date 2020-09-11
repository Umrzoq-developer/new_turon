import React from "react";
import { Input } from 'antd';
import './Textarea.scss'

const {TextArea} = Input;

const InputB = ({placeholderName, labelText, requiredInput, typeName, value, handleChange, prefixSelect, myClass, innerLabel}) => {
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
            <TextArea  autoSize={{ minRows: 6, maxRows: 12 }} style={{borderRadius: '.3rem'}} addonBefore={prefixSelect} onChange={handleChange} value={value} placeholder={placeholderName} id={randId} type={typeName} />
        </div>
    )
};

export default InputB;