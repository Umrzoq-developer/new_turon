import React from "react";
import {Form} from 'antd';
import Input from "antd/es/input";

const SearchInput = ({placeholderName}) => {
    return(
        <Form className='formSearch'>
            <div className='inputsSearch'>
                <svg><use href="#search" xlinkHref="#search"></use></svg>
                <Input placeholder={placeholderName} />
            </div>
        </Form>
    )
}

export default SearchInput;