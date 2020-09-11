import React, {useState} from 'react';
import {connect} from 'react-redux'
import userAvatar from "../images/user/profile.png";
import {useHistory, Link, NavLink} from 'react-router-dom'
import {authLogout} from "../redux/auth/authAction";
import { Layout, Menu, Dropdown, Button } from 'antd';
import { Typography, Modal } from 'antd';
import UIButton from "./Button";
import SearchInput from "./Search";
import NewOrder from "../containers/NewOrder/NewOrder";

// const { Link } = Typography;
const { Header } = Layout;

const NavbarMain = (props) => {

    const userName = "Малика Каримова";
    const navLinks = [
        {title: 'Сводка', path: '/parent', svgId: 'dashboard'},
        {title: 'Заказы', path: '/admin', svgId: 'orders', svgActive: 'activeOrders'},
        {title: 'Коробки', path: '/parent', svgId: 'boxes'},
        {title: 'Склад', path: '/parent', svgId: 'warehouse'},
        {title: 'Рейсы', path: '/parent', svgId: 'airplane'},
        {title: 'Клиенты', path: '/parent', svgId: 'user'},
        {title: 'Финансы', path: '/parent', svgId: 'finance'},
        {title: 'Маркетинг', path: '/parent', svgId: 'location'},
        {title: 'Настройка', path: '/settings', svgId: 'settings', svgActive: 'activeSettings'}
    ]

    const [visibleModal, setVisibleModal] = useState(false)

    const showModal = () => {
        setVisibleModal(true)
    };

    const handleOk = e => {
        setVisibleModal(false)
    };

    const handleCancel = e => {
        setVisibleModal(false)
    };

    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('persist:root');
        props.authLogout();
        history.push('/')
    };

    const menu = (
        <Menu>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="#">
                    <svg><use href='#edit' xlinkHref='#edit'></use></svg>
                    Редактировать
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="#">
                    <svg><use href='#rates' xlinkHref='#rates'></use></svg>
                    Редактировать
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="#">
                    <svg><use href='#list' xlinkHref='#list'></use></svg>
                    Журнал ошибок
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link rel="noopener noreferrer" href="#">
                    <svg><use href='#secure' xlinkHref='#secure'></use></svg>
                    Сменить пароль
                </Link>
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>
                <Link rel="noopener noreferrer" href="#">
                    <svg><use href='#quit' xlinkHref='#quit'></use></svg>
                    Выйти из системы
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout>
            <Header className='navbar'>
                <div className="logoPlace">
                    <svg className="logo"><use href="#logo" xlinkHref="#logo"></use></svg>
                </div>
                <SearchInput placeholderName='Поиск заказа' />
                <Menu mode="horizontal" id="basic-navbar-nav">
                    {
                        navLinks.map((link, index) => {
                            console.log(link.path)
                            return (
                                <Menu.Item key={index}>
                                    <NavLink to={link.path} activeClassName="activeLink">
                                        <svg className='defaultSvg'><use href={`#${link.svgId}`} xlinkHref={`#${link.svgId}`}></use></svg>
                                        <svg className='activeSvg'><use href={`#${link.svgActive}`} xlinkHref={`#${link.svgActive}`}></use></svg>
                                        {link.title}
                                    </NavLink>
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
                <UIButton onClick={showModal} icon='#plus' name='Новая посылка' myClass='buttonAdd' typeName='primary' actionType='button' nameClass='name' />
                <Modal
                    title={
                        <div className='header'>
                            <h5>
                                Новый заказ
                            </h5>
                            <div className='steps'>
                                <div className='step successStep'>
                                    <div className='check'>
                                <span className='checked'>
                                    <svg><use href="#checkmark" xlinkHref="#checkmark"/></svg>
                                </span>
                                    </div>
                                    <div className='text'>Отправитель</div>
                                    <svg>
                                        <use href="#arrowRight" xlinkHref="#arrowRight"/>
                                    </svg>
                                </div>

                                <div className='step'>
                                    <div className='check'>
                                        <span className='checked'>✓</span>
                                    </div>
                                    <div className='text'>Получатель</div>
                                    <svg>
                                        <use href="#arrowRight" xlinkHref="#arrowRight"/>
                                    </svg>
                                </div>

                                <div className='step'>
                                    <div className='check'>
                                        <span className='checked'>✓</span>
                                    </div>
                                    <div className='text'>Товары</div>
                                    <svg>
                                        <use href="#arrowRight" xlinkHref="#arrowRight"/>
                                    </svg>
                                </div>

                                <div className='step'>
                                    <div className='check'>
                                        <span className='checked'>✓</span>
                                    </div>
                                    <div className='text'>Стоимость</div>
                                </div>
                            </div>
                        </div>
                    }
                    visible={visibleModal}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={910}
                    style={{ top: 20 }}
                    closeIcon={<svg><use href="#close" xlinkHref="#close"></use></svg>}
                    footer={[
                        <UIButton name='В черновик' />,
                        <div className='rightBtns'>
                            <UIButton name='Отменить' />
                            <UIButton name='Создать заказ' typeName='primary' />
                        </div>
                    ]}
                >
                    <NewOrder />
                </Modal>
                <div className="userInfo">
                    <div className="notification activeNotification">
                        <svg><use href="#notification" xlinkHref="#notification"></use></svg>
                    </div>
                    <img src={userAvatar} alt="avatar" />
                    <div className='userName'>
                        <Dropdown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
                            <Button>
                                {userName}
                                <svg><use href='#arrowDown' xlinkHref='#arrowDown'></use></svg>
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        </Layout>
    )
};

const mapStateToProps = state => {
    return {
        userName: state.navBar.userName,
        navLinks: state.navBar.navLinks
    }
};

export default connect(mapStateToProps, {authLogout})(NavbarMain)
