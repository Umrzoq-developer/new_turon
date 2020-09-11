import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import './ActionStyle.scss';
import {Button, Checkbox, Dropdown, Menu, Modal, Typography} from "antd";
import {removeChosen} from "../../redux/actionBar/actionBarAction";
import UIButton from "../../components/Button";

const {Text} = Typography;

const ActionBar = ({open, chosen, removeChosen}) => {

    useEffect(() => {
        removeChosen();

    }, [removeChosen]);

    const [visibleDropdown, setVisibleDropdown] = useState(false);
    const [visibleDropdownSecond, setVisibleDropdownSecond] = useState(false);
    const [visibleDropdownThird, setVisibleDropdownThird] = useState(false);

    const [checkedList, setCheckedList] = useState(null);
    const [checkedListSecond, setCheckedListSecond] = useState(null);


    const handleVisibleChange = flag => {
        setVisibleDropdown(flag);
    };

    const handleVisibleChangeSecond = flag => {
        setVisibleDropdownSecond(flag);
    };

    const handleVisibleChangeThird = flag => {
        setVisibleDropdownThird(flag);
    };


    const onChangeCheckbox = checkedList => {
        setCheckedList(checkedList);
    };

    const onChangeCheckboxSecond = checkedListSecond => {
        setCheckedListSecond(checkedListSecond);
    };

    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);


    //Modal
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false)
    };

    const onDelete = (id) => {
        removeChosen(id);
    };

    const menu = (
        <Menu className='actionDropMine'>
            <Text className='textHeader'>
                Выберите статус
            </Text>
            <Menu.Item className='menu-item'>
                <svg className='clock'>
                    <use href="#clock" xlinkHref="#clock"/>
                </svg>
                <span className='menu-item-name'>
                    Оформление
                </span>
            </Menu.Item>
            <Menu.Item className='menu-item'>

                <svg className='onTime blue'>
                    <use href="#onTime" xlinkHref="#onTime"/>
                </svg>
                <span className='menu-item-name'>
                    В ожидание
                </span>

            </Menu.Item>
            <Menu.Item className='menu-item'>

                <svg className='onTime warning'>
                    <use href="#onTime" xlinkHref="#onTime"/>
                </svg>
                <span className='menu-item-name'>
                     На складе
                 </span>

            </Menu.Item>
            <Menu.Item className='menu-item'>

                <svg className='onTime violet'>
                    <use href="#onTime" xlinkHref="#onTime"/>
                </svg>
                <span className='menu-item-name'>
                    Отправлено
                </span>

            </Menu.Item>
            <Menu.Item className='menu-item'>
                <svg className='onTime lightBlue'>
                    <use href="#onTime" xlinkHref="#onTime"/>
                </svg>
                <span className='menu-item-name'>
                    На таможне
                </span>
            </Menu.Item>
            <Menu.Item className='menu-item'>
                <svg className='onTime thinBlue'>
                    <use href="#onTime" xlinkHref="#onTime"/>
                </svg>
                <span className='menu-item-name'>
                    Прибыло
                </span>
            </Menu.Item>
            <Menu.Item className='menu-item'>
                <svg className='ready'>
                    <use href="#ready" xlinkHref="#ready"/>
                </svg>
                <span className='menu-item-name'>
                    Выполнить
                </span>

            </Menu.Item>
            <Menu.Item className='menu-item'>

                <svg className='cancel'>
                    <use href="#cancel" xlinkHref="#cancel"/>
                </svg>
                <span className='menu-item-name'>
                    Отменить
                </span>
            </Menu.Item>

        </Menu>
    );

    const menu2 = (
        <Menu className='actionDropMine' onClick={e => console.log(e)}>
            <Text className='textHeader'>
                Выберите коробку
            </Text>

            {
                chosen && chosen.map(item => {
                    return (
                        <Menu.Item key={item.key}>
                            <Checkbox.Group key={item.key} value={checkedListSecond} onChange={onChangeCheckboxSecond}>
                                <Checkbox className='sideItemCountZero' value={item.key}>
                                    {item.box.props.children}
                                </Checkbox>
                            </Checkbox.Group>
                        </Menu.Item>
                    )
                })
            }

            <Button className='myButtonActionOverlay'>
                <svg className='iconButtonOverlay iconButton-BoxOverlay'>
                    <use href='#boxes' xlinkHref='#boxes'/>
                </svg>
                <p className='nameButtonOverlay'>Новая коробка</p>
            </Button>
        </Menu>
    );

    const menu3 = (
        <Menu className='actionDropMine' onClick={e => console.log(e)}>
            <Text className='textHeader'>
                Выберите рейс
            </Text>

            {
                chosen && chosen.map(item => {
                    return (
                        <Menu.Item key={item.key}>
                            <Checkbox.Group key={item.key} value={checkedListSecond} onChange={onChangeCheckboxSecond}>
                                <Checkbox className='sideItemCountZero' value={item.key}>
                                    {item.flightNum.props.children[0]}
                                </Checkbox>
                            </Checkbox.Group>
                        </Menu.Item>
                    )
                })
            }

            <Button className='myButtonActionOverlay'>
                <svg className='iconButtonOverlay iconButton-AirplaneOverlay'>
                    <use href='#airplane' xlinkHref='#airplane'/>
                </svg>
                <p className='nameButtonOverlay'>Открыть новый рейс</p>
            </Button>
        </Menu>
    );

    const menu4 = (
        <Menu className='actionDropMine'>
            <Text className='textHeader'>
                Распечатать
            </Text>
            <Menu.Item>
            <span>
                Инвойс
            </span>
            </Menu.Item>
            <Menu.Item>
            <span>
               Реестр
            </span>
            </Menu.Item>
            <Menu.Item>
            <span>
                 Декларация
            </span>
            </Menu.Item>
            <Menu.Item>
            <span>
                Манифест
            </span>
            </Menu.Item>
            <Menu.Item>
            <span>
               Путевой лист
            </span>
            </Menu.Item>

        </Menu>
    );


    if (open) {
        return (
            <div className='actionContainer'>
                <p className='itemChosen'>Выбрано: <span className='itemCountAction'>{chosen.length}</span></p>

                <Dropdown overlay={menu} placement="topCenter" arrow trigger={['click']}>
                    <Button className='myButtonAction'>
                        <svg className='iconButton iconButton-primary'>
                            <use href='#status' xlinkHref='#status'/>
                        </svg>
                        <p className='nameButton'>Статус</p>
                    </Button>
                </Dropdown>


                <Button className='myButtonAction' onClick={showModal}>
                    <svg className='iconButton iconButton-violet'>
                        <use href='#combine' xlinkHref='#combine'/>
                    </svg>
                    <p className='nameButton'>Объединить</p>
                </Button>

                <Modal
                    title="Выберите основной заказ"
                    visible={visible}
                    confirmLoading={confirmLoading}
                    className='modalMine'
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText='Объединить'
                    cancelText='Отменить'
                >
                    <Checkbox.Group value={checkedList} onChange={onChangeCheckbox}>
                        {
                            chosen.map(option => {
                                return (
                                    <div className='itemColSecond' key={option.key}>
                                        <Checkbox className='sideItemCountZero' value={option.key}/>
                                        <p className='sideItemNameSecond'>
                                            {option.key}
                                        </p>
                                        <Button className='deleteDiv' onClick={() => onDelete(option.key)}
                                                icon={<svg className='deleteIcon'>
                                                    <use href='#deleteIcon' xlinkHref='#deleteIcon'/>
                                                </svg>}/>
                                    </div>
                                )
                            })
                        }
                    </Checkbox.Group>
                </Modal>

                <Dropdown overlay={menu2} placement='topCenter' arrow trigger={['click']}
                          onVisibleChange={handleVisibleChange} visible={visibleDropdown}>
                    <Button className='myButtonAction'>
                        <svg className='iconButton iconButton-Box'>
                            <use href='#boxes' xlinkHref='#boxes'/>
                        </svg>
                        <p className='nameButton'>В коробку</p>
                    </Button>
                </Dropdown>

                <Dropdown overlay={menu3} placement='topCenter' arrow trigger={['click']}
                          onVisibleChange={handleVisibleChangeSecond} visible={visibleDropdownSecond}>
                    <Button className='myButtonAction'>
                        <svg className='iconButton iconButton-Airplane'>
                            <use href='#airplane' xlinkHref='#airplane'/>
                        </svg>
                        <p className='nameButton'>В рейс</p>
                    </Button>
                </Dropdown>

                <Dropdown overlay={menu4} placement='topCenter' arrow trigger={['click']}
                          onVisibleChange={handleVisibleChangeThird} visible={visibleDropdownThird}>
                    <Button className='myButtonAction'>
                        <svg className='iconButton iconButton-Print'>
                            <use href='#PrintIcon' xlinkHref='#PrintIcon'/>
                        </svg>
                        <p className='nameButton'>Печать</p>
                    </Button>
                </Dropdown>

                <Dropdown overlay={menu} placement='topCenter' arrow>
                    <UIButton icon="#kargoIcon" name="Добавить карго" iconClass='iconButton iconButton-Kargo'
                              myClass='myButtonAction' nameClass='nameButton'/>
                </Dropdown>

                <Dropdown overlay={menu} placement='topCenter' arrow>
                    <UIButton icon="#finance" name="Счет" iconClass='iconButton iconButton-finance'
                              myClass='myButtonAction' nameClass='nameButton'/>
                </Dropdown>

                <Dropdown overlay={menu} placement='topCenter' arrow>
                    <UIButton
                        icon="#deleteIcon" name="Удалить" iconClass='iconButton iconButton-delete'
                        myClass='myButtonAction' nameClass='nameButton'/>
                </Dropdown>

            </div>
        )
    }

    return null
};

const mapState = (state) => {
    return {
        open: state.action.open,
        chosen: state.action.chosen
    }
};

export default connect(mapState, {removeChosen})(ActionBar);
