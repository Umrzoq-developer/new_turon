import React from "react";
import {Select} from "antd";

const {Option} = Select;

const SelectNumber = ({number, handleNumberChange, labelText, requiredInput}) => {
    const randId = 'label' + Math.floor(Math.random() * 10000)
    const numbers = ['+1', '+998'];

    return(
        <>
            {
                labelText
                &&
                <label htmlFor={randId}>
                    {labelText}
                    {
                        requiredInput && <span className='required' />
                    }
                </label>
            }
            <Select
                style={{
                    width: 80,
                }}
                defaultValue={number}
                onChange={handleNumberChange}
            >
                {
                    numbers.map(number => (
                            <Option key={number}>{number}</Option>
                        )
                    )
                }

            </Select>
            <svg className='iconSelectNumber'><use href="#selectArrow" xlinkHref="#selectArrow"/></svg>
        </>
    )
};

export default SelectNumber