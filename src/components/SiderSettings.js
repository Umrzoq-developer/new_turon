import React from "react";
import {Link} from "react-router-dom";
import {Layout} from "antd";
import './SidebarSettings.scss'

const {Sider} = Layout;

const SiderSettings = () => {
    return (
        <Sider className='sidebarLinks'>
            <Link to='#'>
                Общие настройки
            </Link>
            <Link to='/settings/branches'>
                Филиалы
            </Link>
            <Link to='#'>
                Операторы
            </Link>
            <Link to='/settings/extraServices'>
                Дополнительные услуги
            </Link>
            <Link to='#'>
                Статусы
            </Link>
        </Sider>
    )
};

export default SiderSettings;