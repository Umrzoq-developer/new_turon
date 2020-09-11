import React from "react";
import {Button} from "antd";

const UIButton = ({name, icon, iconClass, myClass, nameClass, typeName, loading, actionType, onClick, disabled}) => {
    return (
        <Button className={myClass} type={typeName} htmlType={actionType} onClick={onClick} disabled={disabled}>
            {
                icon && <svg className={iconClass}>
                    <use href={icon} xlinkHref={icon} />
                </svg>
            }
            {
                loading
                ?
                <span className="spinner spinner-md spinner-primary" />
                :
                <p className={nameClass}>{name}</p>
            }
        </Button>
    )
};

export default UIButton