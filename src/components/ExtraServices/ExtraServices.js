import React from "react";
import {Checkbox, Row, Col, InputNumber} from "antd";
import InputC from "../Input/Input";
import SelectInputRegion from "../Input/SelectInputRegion";
import './ExtraServices.scss';

import {Input} from "antd";

const {TextArea} = Input;

const ExtraServices = () => {


    const onChange = (value) => {
        console.log(value);
    };

    const randId = 'label' + Math.floor(Math.random() * 10000);

    const cities = ['Получатель', 'Karshi', 'Andijan', 'Gulistan'];

    const handleChangeCities = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='sender sender-mine'>
            <div className='extra-head'>
                <h6>Дополнительные услуги</h6>
            </div>

            <Checkbox.Group style={{width: '100%'}} onChange={onChange} className='inputRowFirst'>
                <Row>
                    <Col span={8}>
                        <Checkbox value="A" className='myCheckboxExtra firstExtra'>
                            <p className='checkName'> Консолидация </p>
                            <span className='price'>$2</span>
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="B" className='myCheckboxExtra'>
                            <p className='checkName'> Переупаковка</p>
                            <span className='price'>$2</span>
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="C" className='myCheckboxExtra'>
                            <p className='checkName'> Страховка покупки</p>
                            <span className='price'>$2</span>
                        </Checkbox>
                    </Col>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    <Col span={8}>
                        <Checkbox value="D" className='myCheckboxExtra'>
                            <p className='checkName'>Фото покупки</p>
                            <span className='price'>$2</span>
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="E" className='myCheckboxExtra'>
                            <p className='checkName'>Возврат покупки</p>
                            <span className='price'>$2</span>
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="F" className='myCheckboxExtra'>
                            <p className='checkName'>Удаление инвойса</p>
                            <span className='price'>$2</span>
                        </Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>

            <hr className='line'/>
            <div className='inputRowSecond'>
                <div className='leftSide'>
                    <div className='inputRowSecond'>
                        {/*<InputC placeholderName='0.00' typeName='text' labelText='Фактический вес'/>*/}

                        <div className='selectExtra'>
                            <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                                Фактический вес <span className='required'/>
                            </label>
                            <InputNumber
                                min={0.00}
                                defaultValue={0.00}
                                // formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                step={0.1}
                                className='InputNumber'
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                            />
                        </div>

                        <div className='selectExtraMine'>
                            <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                                Цена за кг
                            </label>
                            <InputNumber
                                min={0.00}
                                defaultValue={0.00}
                                // formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                step={0.1}
                                className='InputNumber'
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                            />
                        </div>

                        <div className='selectExtraMine'>
                            <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                                Итого
                            </label>
                            <InputNumber
                                disabled={true}
                                min={0.00}
                                defaultValue={0.00}
                                // formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                step={0.1}
                                className='InputNumber'
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                            />
                        </div>
                        {/*<InputC placeholderName='0.00' typeName='text' labelText='Цена за кг'/>*/}
                        {/*<InputC placeholderName='0.00' typeName='text' labelText='Итого'/>*/}
                    </div>

                    <div className='inputRowThird'>
                        <div className='selectExtra'>
                            <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                                Получено денег
                            </label>
                            <InputNumber
                                min={0.00}
                                defaultValue={0.00}
                                // formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                step={0.01}
                                className='InputNumber'
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                            />
                        </div>

                        <div className='selectExtraMine'>
                            <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                                Долг
                            </label>
                            <InputNumber
                                min={0.00}
                                defaultValue={0.00}
                                disabled={true}
                                // formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                step={0.01}
                                className='InputNumber'
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                onChange={onChange}
                            />
                        </div>

                        <div className='selectExtraMine'>
                            <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                                Плательщик
                            </label>
                            <SelectInputRegion selectedClass='selectedClass' id={randId} value={cities[0]} values={cities}
                                               handleChange={handleChangeCities} />
                        </div>
                    </div>
                </div>
                <div className='rightSide'>
                    <label htmlFor="textarea1">
                        Комментарии
                    </label>
                    <TextArea id='textarea1' placeholder='Комментарии к заказу' autoSize={false} onResize={false}
                              className='textarea'/>
                </div>
            </div>

        </div>
    )
};

export default ExtraServices;