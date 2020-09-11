import React, {useState} from "react";
import {connect} from 'react-redux';
import UIButton from "../../components/Button";
import {Collapse, Checkbox, Form, Switch, DatePicker} from "antd";
import './Sidebar.scss';

const {Panel} = Collapse;
const CheckboxGroup = Checkbox.Group;

const Sidebar = () => {

    const [checkAll, setCheckAll] = useState(false);
    const [checkedList, setCheckedList] = useState(null);

    const plainOptions = [{id: 1, name: 'Оформление'}, {id: 2, name: 'В ожидание'},  {id: 3, name: 'На складе'}, {id: 4,name: 'Отправлено'}, {id: 5, name: 'На таможне'}, {id: 6, name: 'Прибыло'}, {id: 7, name: 'Выполнен'}, {id: 8, name: 'Отменено'}];
    const plainData = [{id: 1, name: '24.06.2020'}, {id: 2, name: '25.06.2020'},  {id: 3, name: '26.06.2020'}, {id: 4,name: '27.06.2020'}, {id: 5, name: '28.06.2020'}, {id: 6, name: '29.06.2020'}];
    const plainBox = [{id: 1, name: 'B0000001'}, {id: 2, name: 'B0000002'},  {id: 3, name: 'B0000003'}, {id: 4,name: 'B0000004'}, {id: 5, name: 'B0000005'}, {id: 6, name: 'B0000006'}];
    const plainRaces = [{id: 1, name: 'JFK0001'}, {id: 2, name: 'JFK0002'},  {id: 3, name: 'JFK0003'}, {id: 4,name: 'JFK0004'}, {id: 5, name: 'JFK0005'}, {id: 6, name: 'JFK0006'}];
    const plainKarobka = [{id: 1, name: 'B0000001'}, {id: 2, name: 'B0000002'},  {id: 3, name: 'B0000003'}, {id: 4,name: 'B0000004'}, {id: 5, name: 'B0000005'}, {id: 6, name: 'B0000006'}];
    const plainOrder= [{id: 1, name: 'Интернет-заказ'}, {id: 2, name: 'Офис'},  {id: 3, name: 'Пикап'}, {id: 4,name: 'FedEx'}];
    const plainPayment= [{id: 1, name: 'Наличные uz'}, {id: 2, name: 'Наличные us'},  {id: 3, name: 'Банковская карта uz'}, {id: 4,name: 'Банковская карта us'}, {id: 5, name: 'Zell'}, {id: 6, name: 'PayPal'}];
    const plainServices= [{id: 1, name: 'Консолидация'}, {id: 2, name: 'Фото покупки'},  {id: 3, name: 'Переупаковка'}, {id: 4,name: 'Возврат покупки'}, {id: 5, name: 'Дополнительная упаковка'}, {id: 6, name: 'Страховка покупки'}, {id: 7, name: 'Удаление инвойса'}];
    const plainBranches= [{id: 1, name: 'Флорида'}, {id: 2, name: 'Нью-Йорк'},  {id: 3, name: 'Стамбул'}, {id: 4,name: 'Лондон'}];
    const plainOperators= [{id: 1, name: 'Флорида'}, {id: 2, name: 'Нью-Йорк'},  {id: 3, name: 'Стамбул'}, {id: 4,name: 'Лондон'}];


    const onChangeCheckbox = checkedList => {
        console.log(checkedList);
        setCheckedList(checkedList);
        setCheckAll(checkedList.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        console.log(e.target.checked);
        setCheckedList(e.target.checked ? plainOptions.map(option => option.id) : []);
        setCheckAll(e.target.checked);
    };

    //Data

    const [checkAllData, setCheckAllData] = useState(false);
    const [checkedListData, setCheckedListData] = useState(null);

    const onChangeCheckboxData = checkedListData => {
        setCheckedListData(checkedListData);
        setCheckAllData(checkedListData.length === plainData.length);
    };
    const onCheckAllChangeData = e => {
        setCheckedListData(e.target.checked ? plainData.map(option => option.id) : []);
        setCheckAllData(e.target.checked);
    };

    // Box

    const [checkAllBox, setCheckAllBox] = useState(false);
    const [checkedListBox, setCheckedListBox] = useState(null);
    const onChangeCheckboxBox = checkedListBox => {
        setCheckedListBox(checkedListBox);
        setCheckAllBox(checkedListBox.length === plainBox.length);
    };

    const onCheckAllChangeBox = e => {
        setCheckedListBox(e.target.checked ? plainBox.map(option => option.id) : []);
        setCheckAllBox(e.target.checked);
    };

    // Races

    const [checkAllRaces, setCheckAllRaces] = useState(false);
    const [checkedListRaces, setCheckedListRaces] = useState(null);
    const onChangeCheckboxRaces = checkedListRaces => {
        setCheckedListRaces(checkedListRaces);
        setCheckAllRaces(checkedListRaces.length === plainRaces.length);
    };

    const onCheckAllChangeRaces = e => {
        setCheckedListRaces(e.target.checked ? plainRaces.map(option => option.id) : []);
        setCheckAllRaces(e.target.checked);
    };

    //Karobka

    const [checkAllKarobka, setCheckAllKarobka] = useState(false);
    const [checkedListKarobka, setCheckedListKarobka] = useState(null);
    const onChangeCheckboxKarobka = checkedListKarobka => {
        setCheckedListKarobka(checkedListKarobka);
        setCheckAllKarobka(checkedListKarobka.length === plainKarobka.length);
    };

    const onCheckAllChangeKarobka = e => {
        setCheckedListKarobka(e.target.checked ? plainKarobka.map(option => option.id) : []);
        setCheckAllKarobka(e.target.checked);
    };

    //Orders

    const [checkAllOrder, setCheckAllOrder] = useState(false);
    const [checkedListOrder, setCheckedListOrder] = useState(null);
    const onChangeCheckboxOrder = checkedListOrder => {
        setCheckedListOrder(checkedListOrder);
        setCheckAllOrder(checkedListOrder.length === plainOrder.length);
    };

    const onCheckAllChangeOrder = e => {
        setCheckedListOrder(e.target.checked ? plainOrder.map(option => option.id) : []);
        setCheckAllOrder(e.target.checked);
    };

    //Payment

    const [checkAllPayment, setCheckAllPayment] = useState(false);
    const [checkedListPayment, setCheckedListPayment] = useState(null);
    const onChangeCheckboxPayment = checkedListPayment => {
        setCheckedListPayment(checkedListPayment);
        setCheckAllPayment(checkedListPayment.length === plainPayment.length);
    };

    const onCheckAllChangePayment = e => {
        setCheckedListPayment(e.target.checked ? plainPayment.map(option => option.id) : []);
        setCheckAllPayment(e.target.checked);
    };


    //Services

    const [checkAllServices, setCheckAllServices] = useState(false);
    const [checkedListServices, setCheckedListServices] = useState(null);
    const onChangeCheckboxServices = checkedListServices => {
        setCheckedListServices(checkedListServices);
        setCheckAllServices(checkedListServices.length === plainServices.length);
    };

    const onCheckAllChangeServices = e => {
        setCheckedListServices(e.target.checked ? plainServices.map(option => option.id) : []);
        setCheckAllServices(e.target.checked);
    };


    //Branches

    const [checkAllBranches, setCheckAllBranches] = useState(false);
    const [checkedListBranches, setCheckedListBranches] = useState(null);
    const onChangeCheckboxBranches = checkedListBranches => {
        setCheckedListBranches(checkedListBranches);
        setCheckAllBranches(checkedListBranches.length === plainBranches.length);
    };

    const onCheckAllChangeBranches = e => {
        setCheckedListBranches(e.target.checked ? plainBranches.map(option => option.id) : []);
        setCheckAllBranches(e.target.checked);
    };

    //Operators

    const [checkAllOperators, setCheckAllOperators] = useState(false);
    const [checkedListOperators, setCheckedListOperators] = useState(null);
    const onChangeCheckboxOperators = checkedListOperators => {
        setCheckedListOperators(checkedListOperators);
        setCheckAllOperators(checkedListOperators.length === plainOperators.length);
    };

    const onCheckAllChangeOperators = e => {
        setCheckedListOperators(e.target.checked ? plainOperators.map(option => option.id) : []);
        setCheckAllOperators(e.target.checked);
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };


    return (
        <div className='col-sidebar'>

            <Collapse
                expandIconPosition='right'
                className='side-item CustomArrow'
                style={{border: 'none'}}
            >
                <Panel
                    style={{border: 'none'}}
                    header={
                        <div className="itemUp">
                            <div className='IconDiv'>
                                <svg className='Icon'>
                                    <use href="#allOrders" xlinkHref="#allOrders"/>
                                </svg>
                            </div>
                            <p className='itemName'>Всего заказов</p>
                            <span className='itemCount'>180</span>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="0"
                    className='panelItem'
                >
                    <div className='itemCol'>
                        <p className='sideItemName'>
                            Выполнено
                        </p>
                        <span className='sideItemCount'>115</span>
                    </div>
                    <div className='itemCol'>
                        <p className='sideItemName'>В ожидание</p>
                        <span className='sideItemCountTwo'>180</span>
                    </div>

                </Panel>


                <Panel
                    style={{border: 'none'}}
                    header={<div className="itemUp">
                        <div className='IconDiv'>
                            <svg className='Icon'>
                                <use href="#boxIcon" xlinkHref="#boxIcon"/>
                            </svg>
                        </div>

                        <p className='itemName'>Всего коробок</p>

                        <span className='itemCount'>22кг</span>
                        <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                    </div>
                    }
                    key="1"
                    className='panelItem'
                >
                    <div className='itemCol'>
                        <p className='sideItemName'>
                            Выполнено
                        </p>
                        <span className='sideItemCount'>10</span>
                    </div>
                    <div className='itemCol'>
                        <p className='sideItemName'>В ожидание</p>
                        <span className='sideItemCountTwo'>180</span>
                    </div>

                </Panel>


                <Panel style={{border: 'none'}} header={
                    <div className="itemUp">
                        <div className='IconDiv'>
                            <svg className='Icon iconKg'><use href="#KGIcon" xlinkHref="#KGIcon"/></svg>
                        </div>
                        <p className='itemName'>Общий вес</p>
                        <span className='itemCount'>22кг</span>
                        <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                    </div>
                }
                key="2">

                    <div className='itemCol'>
                        <p className='sideItemName'>
                            Выполнено
                        </p>
                        <span className='sideItemCount'>10</span>
                    </div>
                    <div className='itemCol'>
                        <p className='sideItemName'>В ожидание</p>
                        <span className='sideItemCountTwo'>180</span>
                    </div>
                </Panel>

                <Panel
                    style={{border: 'none', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <div className='IconDiv'>
                                <svg className='Icon'>
                                    <use href="#moneyIcon" xlinkHref="#moneyIcon"/>
                                </svg>
                            </div>

                            <p className='itemName'>Cумма сбора</p> <span className='itemCount'>$1530</span>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="3">

                    <div className='itemCol'>
                        <p className='sideItemName'>
                            Сумма заказов
                        </p>
                        <span className='sideItemCountZero'>$25 650</span>
                    </div>
                    <div className='itemCol'>
                        <p className='sideItemName'>Собрано</p>
                        <span className='sideItemCount'>$690</span>
                    </div>
                    <div className='itemCol'>
                        <p className='sideItemName'>Задолженность</p>
                        <span className='sideItemCountTwo'>$180</span>
                    </div>

                </Panel>

                <UIButton name='Распечатать все' icon='#PrintIcon' iconClass='IconPrint' myClass='myButton' nameClass='nameClassBtn'/>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>Статус</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="4" className='panelCheckbox'>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChange}
                            checked={checkAll}
                            options={plainOptions}
                            className='sideItemCountZero'
                        />
                    </div>

                    <Checkbox.Group value={checkedList} onChange={onChangeCheckbox}>

                        {
                            plainOptions.map(option => {
                                return (
                                    <div className='itemColSecond' key={option.id}>
                                        <p className='sideItemNameSecond'>
                                            {option.name}
                                        </p>
                                        <Checkbox className='sideItemCountZero' value={option.id}/>
                                    </div>
                                )
                            })
                        }
                    </Checkbox.Group>

                </Panel>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>ДАТА</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="5" className='panelCheckbox'>

                    <Form
                        layout={{labelCol: {span: 4}, wrapperCol: {span: 14}}}
                        style={{display: 'flex', flexDirection: 'row', marginBottom: '15px', marginLeft: '5px'}}
                    >
                        <Form.Item label="От" style={{width: '45%', marginRight: '10px', marginBottom: '0'}}>
                            <DatePicker placeholder='От' style={{fontSize: '10px'}} onChange={onChange}/>
                        </Form.Item>
                        <Form.Item label="До" style={{width: '45%', marginTop: '0'}}>
                            <DatePicker placeholder='До' style={{fontSize: '10px'}} onChange={onChange}/>
                        </Form.Item>
                    </Form>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChangeData}
                            checked={checkAllData}
                            options={plainData}
                            className='sideItemCountZero'
                        />
                    </div>

                    <CheckboxGroup value={checkedListData} onChange={onChangeCheckboxData}>
                        {plainData.map(data => {
                            return(
                                <div className='itemColSecond' key={data.id}>
                                    <p className='sideItemNameSecond'>
                                        {data.name}
                                    </p>
                                    <Checkbox className='sideItemCountZero' value={data.id} />
                                </div>
                            )
                        })}
                    </CheckboxGroup>
                </Panel>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>Коробка</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="6" className='panelCheckbox'>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChangeBox}
                            checked={checkAllBox}
                            options={plainBox}
                            className='sideItemCountZero'
                        />
                    </div>

                    <CheckboxGroup value={checkedListBox} onChange={onChangeCheckboxBox}>
                        {
                            plainBox.map(box => {
                                return(
                                    <div className='itemColSecond' key={box.id}>
                                        <p className='sideItemNameSecond'>
                                            {box.name}
                                        </p>
                                        <Checkbox className='sideItemCountZero' value={box.id} />
                                    </div>
                                )
                            })
                        }
                    </CheckboxGroup>
                </Panel>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>Рейсы</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="7" className='panelCheckbox'>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChangeRaces}
                            checked={checkAllRaces}
                            options={plainRaces}
                            className='sideItemCountZero'
                        />
                    </div>

                    <CheckboxGroup value={checkedListRaces} onChange={onChangeCheckboxRaces}>
                        {
                            plainRaces.map(item => {
                                return(
                                    <div className='itemColSecond' key={item.id}>
                                        <p className='sideItemNameSecond'>
                                            {item.name}
                                        </p>
                                        <Checkbox className='sideItemCountZero' value={item.id} />
                                    </div>
                                )
                            })
                        }
                    </CheckboxGroup>
                </Panel>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>Коробка</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="8" className='panelCheckbox'>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChangeKarobka}
                            checked={checkAllKarobka}
                            options={plainKarobka}
                            className='sideItemCountZero'
                        />
                    </div>

                    <CheckboxGroup value={checkedListKarobka} onChange={onChangeCheckboxKarobka}>
                        {
                            plainKarobka.map(item => {
                                return(
                                    <div className='itemColSecond' key={item.id}>
                                        <p className='sideItemNameSecond'>
                                            {item.name}
                                        </p>
                                        <Checkbox className='sideItemCountZero' value={item.id} />
                                    </div>
                                )
                            })
                        }
                    </CheckboxGroup>

                </Panel>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>Тип заказа</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="9" className='panelCheckbox'>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChangeOrder}
                            checked={checkAllOrder}
                            options={plainOrder}
                            className='sideItemCountZero'/>
                    </div>

                    <CheckboxGroup value={checkedListOrder} onChange={onChangeCheckboxOrder}>
                        {
                            plainOrder.map(item => {
                                return(
                                    <div className='itemColSecond' key={item.id}>
                                        <p className='sideItemNameSecond'>
                                            {item.name}
                                        </p>
                                        <Checkbox className='sideItemCountZero' value={item.id} />
                                    </div>
                                )
                            })
                        }
                    </CheckboxGroup>

                </Panel>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>Тип оплаты</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="10" className='panelCheckbox'>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChangePayment}
                            checked={checkAllPayment}
                            options={plainPayment}
                            className='sideItemCountZero'
                        />
                    </div>

                    <CheckboxGroup value={checkedListPayment} onChange={onChangeCheckboxPayment}>
                        {
                            plainPayment.map(item => {
                                return(
                                    <div className='itemColSecond' key={item.id}>
                                        <p className='sideItemNameSecond'>
                                            {item.name}
                                        </p>
                                        <Checkbox className='sideItemCountZero' value={item.id} />
                                    </div>
                                )
                            })
                        }
                    </CheckboxGroup>


                </Panel>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>Доп услуги</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="11" className='panelCheckbox'>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChangeServices}
                            checked={checkAllServices}
                            options={plainServices}
                            className='sideItemCountZero'/>
                    </div>


                    <CheckboxGroup value={checkedListServices} onChange={onChangeCheckboxServices}>
                        {
                            plainServices.map(item => {
                                return(
                                    <div className='itemColSecond' key={item.id}>
                                        <p className='sideItemNameSecond'>
                                            {item.name}
                                        </p>
                                        <Checkbox className='sideItemCountZero' value={item.id} />
                                    </div>
                                )
                            })
                        }
                    </CheckboxGroup>


                </Panel>

                <div className="itemUpSwitch">
                    <p className='itemNameSecond'>Задолженность</p>
                    <Switch size='small' className='switchIcon' defaultChecked/>
                </div>

                <div className="itemUpSwitch">
                    <p className='itemNameSecond'>со скидкой</p>
                    <Switch size='small' className='switchIcon' defaultChecked/>
                </div>

                <div className="itemUpSwitch">
                    <p className='itemNameSecond'>Только карго</p>
                    <Switch size='small' className='switchIcon' defaultChecked/>
                </div>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>Филиалы</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="12" className='panelCheckbox'>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChangeBranches}
                            checked={checkAllBranches}
                            options={plainBranches}
                            className='sideItemCountZero'/>
                    </div>

                    <CheckboxGroup value={checkedListBranches} onChange={onChangeCheckboxBranches}>
                        {
                            plainBranches.map(item => {
                                return(
                                    <div className='itemColSecond' key={item.id}>
                                        <p className='sideItemNameSecond'>
                                            {item.name}
                                        </p>
                                        <Checkbox className='sideItemCountZero' value={item.id} />
                                    </div>
                                )
                            })
                        }
                    </CheckboxGroup>

                </Panel>

                <Panel
                    style={{borderBottom: '1px solid #EAEDF3', marginTop: '0'}}
                    header={
                        <div className="itemUp">
                            <p className='itemNameSecond'>Операторы</p>
                            <svg className='arrowDown'><use href="#arDown" xlinkHref="#arDown"/></svg>
                        </div>
                    }
                    key="14" className='panelCheckbox'>

                    <div className='itemColSecond'>
                        <p className='sideItemNameSecond'>
                            Все
                        </p>
                        <Checkbox
                            onChange={onCheckAllChangeOperators}
                            checked={checkAllOperators}
                            options={plainOperators}
                            className='sideItemCountZero'/>
                    </div>

                    <CheckboxGroup value={checkedListOperators} onChange={onChangeCheckboxOperators}>
                        {
                            plainOperators.map(item => {
                                return(
                                    <div className='itemColSecond' key={item.id}>
                                        <p className='sideItemNameSecond'>
                                            {item.name}
                                        </p>
                                        <Checkbox className='sideItemCountZero' value={item.id} />
                                    </div>
                                )
                            })
                        }
                    </CheckboxGroup>

                </Panel>

            </Collapse>


            <div className='side-item-bottom-fixed'>
                <UIButton
                    icon='#filterIcon'
                    name='Cбросить фильтры (:'
                    iconClass='IconRight'
                    myClass='myButtonTwo'
                    nameClass='nameClass'
                />
            </div>

        </div>
    )
};

const mapState = state => {
    return {
        error: state.auth.error
    }
};

export default connect(mapState, {})(Sidebar);