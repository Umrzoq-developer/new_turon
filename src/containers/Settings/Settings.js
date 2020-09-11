import React from "react";
import {Layout} from "antd";

import './Settings.scss'
import SettingsExtraServices from "../../components/SettingsExtraServices/SettingsExtraServices";
import Branches from "./Branches/Branches";
import SiderSettings from "../../components/SiderSettings";


const Settings = () => {
    return (
        <div className='Settings settingsBranches'>
            <div className='structure'>
                <SiderSettings/>
                {/*<SettingsExtraServices/>*/}
                <div className='branches'></div>
                {/*<Branches />*/}
            </div>
        </div>
    )
}

export default Settings