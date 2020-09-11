import React, {useState} from "react";
import {Modal, Row, Tabs} from "antd";
import UIButton from "../Button";
import './SettingsExtraServices.scss'
import InputC from "../Input/Input";
import InputB from "../Input/Textarea";
import Inputnumber from "../Input/InputNumber";
import SelectInputRegion from "../Input/SelectInputRegion";


const {TabPane} = Tabs;

const SettingsExtraServices = () => {
    const [visibleAdd, setVisibleAdd] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const testData = [
        {id: 1, name: 'Консолидация', price: '$2', status: 'Активний'},
        {id: 2, name: 'Фото покупки', price: '$2', status: 'Активний'},
        {id: 3, name: 'Переупаковка', price: '$2', status: 'Неактивний'},
        {id: 4, name: 'Удалиния инвойса', price: '$2', status: 'Активний'},
    ];

    const [editName, setEditName] = useState('Консолидация');

    // console.log(editName, "editName");

    //Add
    const showModal = () => {
        setVisibleAdd(true)
    };

    const handleOk = () => {
        setVisibleAdd(false)
    };

    const handleCancel = () => {
        setVisibleAdd(false)
    };

    //Edit
    const showEditModal = () => {
        setVisibleEdit(true)
    };


    const handleOkEdit = () => {
        setVisibleEdit(false)
    };

    const handleCancelEdit = () => {
        setVisibleEdit(false)
    };



    const values = ['Активний', 'Неактивний'];
    const onChange = e => {
        console.log(e);
    };

    const StatusItem = (item) => {
        switch (item) {
            case 'Активний':
                return 'activeItem';
            case 'Неактивний':
                return 'notActive';
            default:
                return item
        }
    };

    const callback = (key) => {
        console.log(key);
    };

    return (
        <div className='settingsExtraContainer'>
            <Row className='headerSettingsExtra'>
                <div className='head'>
                    Дополнительные услуги <span className='headCount'>5</span>
                </div>

                <UIButton myClass='myExtraSettingsButton' onClick={showModal} name='Добавить услугу'
                          nameClass='nameExtraAdd' icon='#plus'
                          iconClass='plusIconSettings'/>
            </Row>

            <Row className='headerSettingsExtraBody'>
                {
                    testData.map(item => {
                        return (
                            <div className='bodyItem' key={item.id}>
                                <div className='bodyId'>{item.id}</div>
                                <div className='bodyName'>{item.name}</div>
                                <div className='bodyPrice'>{item.price}</div>
                                <div className='bodyButtonGroup'>
                                    <div className={`bodyStatus ${StatusItem(item.status)}`}>{item.status}</div>
                                    <UIButton name='Изминеть' myClass='EditButton' nameClass='editName' icon='#edit'
                                              iconClass='editIconClass' onClick={showEditModal}/>
                                </div>
                            </div>

                        )
                    })
                }
            </Row>

            {/*Edit*/}
            <Modal
                width={460}
                visible={visibleEdit}
                title={<p style={{color: 'black', fontSize: '16px', fontWeight: '500'}}>Редактирования №1</p>}
                onOk={handleOkEdit}
                onCancel={handleCancelEdit}
                centered
                className='modalAdd'
                footer={[
                    <UIButton key='delete' name='Удалить' myClass='delete' nameClass='deleteEdit' icon='#deleteIcon' iconClass='deleteIconEdit' />,
                    <div style={{marginLeft: '20%', width: '200px', display: 'flex', borderBottom: 'none'}}>
                        <UIButton key="back" name='Отменить' myClass='cancel' onClick={handleCancelEdit}/>
                        <UIButton key="submit" type="primary" myClass='okAdd' onClick={handleOkEdit} name='Сохранить'
                                  nameClass='addName'/>
                    </div>
                ]}
            >
                <Tabs className='TabPanel' defaultActiveKey="1" onChange={callback}>
                    <TabPane className='TabItem' tab="Руссукий" key="1">
                        <InputC handleChange={e => setEditName(e.target.value)} labelText='Названия' requiredInput/>

                        <InputB labelText='Описания' requiredInput myClass='textareaExtra'/>

                        <Row className='chooseRow'>
                            <Inputnumber defaultValue={1.0} label='Стоимость' extraClass='inputNumberRow'/>

                            <SelectInputRegion selectInput='selection' selectedClass='selectionClass' values={values}
                                               value={values[0]}
                                               handleChange={onChange} showArrow={false} label='Статус' requiredInput/>
                        </Row>
                    </TabPane>
                    <TabPane className='TabItem' tab="O'zbekcha" key="2">
                        <InputC handleChange={e => console.log(e.target.value)}  labelText='Nomi' requiredInput/>

                        <InputB labelText='Tavsilot' requiredInput myClass='textareaExtra'/>

                        <Row className='chooseRow'>
                            <Inputnumber defaultValue={1.0}  label='Narxi' extraClass='inputNumberRow'/>

                            <SelectInputRegion selectInput='selection' selectedClass='selectionClass' values={values}
                                               value={values[0]}
                                               handleChange={onChange} showArrow={false} label='Status' requiredInput/>
                        </Row>
                    </TabPane>
                    <TabPane className='TabItem' tab="English" key="3">
                        <InputC handleChange={e => console.log(e.target.value)}  labelText='Name' requiredInput/>

                        <InputB labelText='Option' requiredInput myClass='textareaExtra'/>

                        <Row className='chooseRow'>
                            <Inputnumber defaultValue={1.0}  label='Price' extraClass='inputNumberRow'/>

                            <SelectInputRegion selectInput='selection' selectedClass='selectionClass' values={values}
                                                value={values[0]}
                                               handleChange={onChange} showArrow={false} label='Status' requiredInput/>
                        </Row>

                    </TabPane>
                </Tabs>
            </Modal>

            {/*Add */}
            <Modal
                width={460}
                visible={visibleAdd}
                title={<p style={{color: 'black', fontSize: '16px', fontWeight: '500'}}>Добавить услугу</p>}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                className='modalAdd'
                footer={[
                    <div style={{marginLeft: '50%', width: '200px', display: 'flex', borderBottom: 'none'}}>
                        <UIButton key="back" name='Отменить' myClass='cancel' onClick={handleCancel}/>
                        <UIButton key="submit" type="primary" myClass='okAdd' onClick={handleOk} name='Добавить'
                                  nameClass='addName'/>
                    </div>
                ]}
            >
                <Tabs className='TabPanel' defaultActiveKey="1" onChange={callback}>
                    <TabPane className='TabItem' tab="Руссукий" key="1">
                        <InputC labelText='Названия' requiredInput/>

                        <InputB labelText='Описания' requiredInput myClass='textareaExtra'/>

                        <Row className='chooseRow'>
                            <Inputnumber label='Стоимость' extraClass='inputNumberRow'/>

                            <SelectInputRegion selectInput='selection' selectedClass='selectionClass' values={values}
                                               value={values[0]}
                                               handleChange={onChange} showArrow={false} label='Статус' requiredInput/>
                        </Row>
                    </TabPane>
                    <TabPane className='TabItem' tab="O'zbekcha" key="2">
                        <InputC labelText='Nomi' requiredInput/>

                        <InputB labelText='Tavsilot' requiredInput myClass='textareaExtra'/>

                        <Row className='chooseRow'>
                            <Inputnumber label='Narxi' extraClass='inputNumberRow'/>

                            <SelectInputRegion selectInput='selection' selectedClass='selectionClass' values={values}
                                               value={values[0]}
                                               handleChange={onChange} showArrow={false} label='Status' requiredInput/>
                        </Row>
                    </TabPane>
                    <TabPane className='TabItem' tab="English" key="3">
                        <InputC labelText='Name' requiredInput/>

                        <InputB labelText='Option' requiredInput myClass='textareaExtra'/>

                        <Row className='chooseRow'>
                            <Inputnumber label='Price' extraClass='inputNumberRow'/>

                            <SelectInputRegion selectInput='selection' selectedClass='selectionClass' values={values}
                                               value={values[0]}
                                               handleChange={onChange} showArrow={false} label='Status' requiredInput/>
                        </Row>

                    </TabPane>
                </Tabs>
            </Modal>

        </div>
    )
};

export default SettingsExtraServices;