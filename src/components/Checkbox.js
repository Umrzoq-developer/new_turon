import React from "react";

const UICheckBox = ({handleToggle, name, rounded, subname, icon}) => {
    return (
        <label className='itemColSecond d-flex flex-row' onClick={handleToggle}>
            {name && <p className='sideItemNameCheckbox'>{name}</p>}
            {icon && <svg className='iconCheckBox'><use href={icon} xlinkHref={icon} /></svg>}
            {subname && <small className='subname'>{subname}</small>}
            <input
                type="checkbox"
            />
            <span className={rounded ? 'checkmark checkmark-round'  : 'checkmark'} />
        </label>

    )
};

export default UICheckBox;