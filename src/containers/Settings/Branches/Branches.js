import React, {useState} from "react";
import {Card, Modal} from 'antd';
import UIButton from "../../../components/Button";
import './Branches.scss'
import InputC from "../../../components/Input/Input";
import SelectInputRegion from "../../../components/Input/SelectInputRegion";
import SelectNumber from "../../../components/Input/SelectNumber";

const Branches = () => {

    const [number, setNumber] = useState('+1')

    const [visibleModal, setVisibleModal] = useState(false);

    const handleOk = () => {
        setVisibleModal(false)
    }

    const handleCancel = () => {
        setVisibleModal(false);
    }

    const showModal = () => {
        setVisibleModal(true)
    }

    const handleChange = number => {
        console.log(number)
        setNumber(number)
    }

    const [branches, setBranches] = useState([
        {
            title: 'Головной офис',
            btnTitle: 'Изменить',
            location: 'Узбекистан, Ташкент, Шайхонтохурский р-н, ул. Заркайнар, д.1 кв-ра 2',
            phone: '+998 71 200-34-33',
            email: 'info@turonexpress.uz',
            time: '09:00-20:00',
            weightStart: 'до 3 кг - ',
            weightStartPrice: '$10',
            weightContinue: 'выше - ',
            weightContinuePrice: '$9'
        },
        {
            title: 'New York',
            btnTitle: 'Изменить',
            location: 'США, Нью-Йорк, Бруклин, 2227 PLUMB 2nd, Unit C1',
            phone: '+998 71 200-34-33',
            email: 'usa@turonexpress.uz',
            time: '09:00-20:00',
            weightStart: 'до 3 кг - ',
            weightStartPrice: '$10',
            weightContinue: 'выше - ',
            weightContinuePrice: '$9'
        },
        {
            title: 'Стамбул',
            btnTitle: 'Изменить',
            location: 'Турция, Fatih/İstanbul, Katip Kasım, 34130 Fatih/İstanbul,',
            phone: '+998 71 200-34-33',
            email: 'istanbul@turonexpress.uz',
            time: '09:00-20:00',
            weightStart: 'до 3 кг - ',
            weightStartPrice: '$10',
            weightContinue: 'выше - ',
            weightContinuePrice: '$9'
        },
        {
            title: 'Лондон',
            btnTitle: 'Изменить',
            location: 'Турция, Fatih/İstanbul, Katip Kasım, 34130 Fatih/İstanbul,',
            phone: '+998 71 200-34-33',
            email: 'london@turonexpress.uz',
            time: '09:00-20:00',
            weightStart: 'до 3 кг - ',
            weightStartPrice: '$10',
            weightContinue: 'выше - ',
            weightContinuePrice: '$9'
        }
    ])

    const coutries = ['Выберите страну', 'США', 'Узбекистан']
    const cities = ['Выберите город', 'Нью-Йорк', 'Ташкент']
    const districts = ['Выберите район', 'Brooklyn', 'Шайхантахурский']
    const timeStart = ['09:00', '10:00']
    const timeEnd = ['18:00', '19:00']

    return(
        <div>
            <div className='headContent'>
                <h5>Филиалы <span>{branches.length}</span></h5>
                <UIButton name='Добавить филиал' icon='#plus' onClick={showModal} />
                <Modal
                    className='modalAdd'
                    title={
                        <div className='header'>
                            <h5>
                                Добавить филиал
                            </h5>
                        </div>
                    }
                    visible={visibleModal}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={680}
                    centered
                    closeIcon={<svg><use href="#close" xlinkHref="#close"></use></svg>}
                    footer={[
                        <div className='rightBtns'>
                            <UIButton name='Отменить' />
                            <UIButton name='Добавить' typeName='primary' />
                        </div>
                    ]}
                >
                    <div className='formAddBranch'>
                        <InputC labelText='Название филиала' myClass='fullWidth' requiredInput={true} typeName='text' />
                        <InputC labelText='ZIP-code' requiredInput={true} typeName='text' />
                        <div className='selectRegion'>
                            <div className='defaultInput'>
                                <SelectInputRegion values={coutries} value={coutries[0]} labelText='Страна' requiredInput svgPath='arDown' />
                            </div>
                            <div className='defaultInput'>
                                <SelectInputRegion values={cities} value={cities[0]} labelText='Город' requiredInput svgPath='arDown' />
                            </div>
                            <div className='defaultInput'>
                                <SelectInputRegion values={districts} value={districts[0]} labelText='Район' requiredInput svgPath='arDown' />
                            </div>
                        </div>
                        <InputC labelText='Улица' requiredInput={true} myClass='fullWidth' typeName='text' />
                        <div className='houseNapartment'>
                            <InputC labelText='Дом' requiredInput={true} typeName='text' />
                            <InputC labelText='Квартира' typeName='text' />
                            <InputC labelText='Ориентир' typeName='text' />
                        </div>
                        <div className='infoPhones'>
                            <InputC prefixSelect={<SelectNumber number={number} handleNumberChange={handleChange} />} requiredInput labelText='Номер телефона' />
                            <InputC prefixSelect={<SelectNumber number={number} handleNumberChange={handleChange} />} labelText='Дополнительный номер' />
                            <InputC labelText='E-mail' typeName='email' />
                        </div>
                        <div className='timeNweight'>
                            <div className='time'>
                                <label>Время работы</label>
                                <div className='times'>
                                    <SelectInputRegion values={timeStart} value={timeStart[0]} svgPath='arDown' />
                                    <SelectInputRegion values={timeEnd} value={timeEnd[0]} svgPath='arDown' />
                                </div>
                            </div>
                            <InputC myClass='weightStart' labelText='Тариф до 3 кг' typeName='text' />
                            <InputC labelText='Высше 3 кг' typeName='text' />
                        </div>
                    </div>
                </Modal>
            </div>
            <div className='Branches'>
            {
                branches.map((branch, index) => {
                    return(
                        <Card
                            key={index}
                            title={
                                <>
                                    <span className='num'>{index + 1}.</span>
                                    <span className='title'>{branch.title}</span>
                                    <UIButton name={branch.btnTitle} />
                                </>
                            }
                        >
                            <div className='row'>
                                <svg><use href="#office" xlinkHref="#office"/></svg>
                                <div className='info'>
                                    {branch.location}
                                </div>
                            </div>
                            <div className='row'>
                                <svg><use href="#phone" xlinkHref="#phone"/></svg>
                                <div className='info'>
                                    {branch.phone}
                                </div>
                            </div>
                            <div className='row'>
                                <svg><use href="#email" xlinkHref="#email"/></svg>
                                <div className='info'>
                                    {branch.email}
                                </div>
                            </div>
                            <div className='row'>
                                <svg><use href="#time" xlinkHref="#time"/></svg>
                                <div className='info'>
                                    {branch.time}
                                </div>
                            </div>
                            <div className='row'>
                                <svg><use href="#boxes" xlinkHref="#boxes"/></svg>
                                <div className='info'>
                                    <span>{branch.weightStart} </span>{branch.weightStartPrice} <br/>
                                    <span>{branch.weightContinue} </span>{branch.weightContinuePrice}
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
        </div>
    )
}

export default Branches