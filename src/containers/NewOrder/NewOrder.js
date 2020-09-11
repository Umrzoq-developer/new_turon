import React, {useState} from "react";
import './NewOrder.scss'
import SearchInput from "../../components/Search";
import InputC from "../../components/Input/Input";
import {Radio} from 'antd';
import SelectNumber from "../../components/Input/SelectNumber";
import Receiver from "../../components/Receiver/Receiver";
import FormAddOrders from "../../components/FormAddOrders/FormAddOrders";
import ExtraServices from "../../components/ExtraServices/ExtraServices";

const NewOrder = () => {

    const [number, setNumber] = useState('+1');
    const [radioGender, setRadioGender] = useState(0);
    const [radioGenderReceiver, setRadioGenderReceiver] = useState(0);

    const genderChoose = e => {
        setRadioGender(e.target.value)
    };

    const genderChooseReceiver = e => {
        setRadioGenderReceiver(e.target.value)
    };

    const handleNumberChange = (number) => {
        console.log(number, "number");
        setNumber(number)
    };

    return (
        <div className='newOrder'>
            <div className='formAdd'>
                <div className='typeOrder'>
                    <div className='required'>Выберите тип заказа</div>
                    <div className='types'>
                        <div className='type activeType'>
                            <svg>
                                <use href="#office" xlinkHref="#office"/>
                            </svg>
                            <p>Офис</p>
                        </div>
                        <div className='type'>
                            <svg>
                                <use href="#truck" xlinkHref="#truck"/>
                            </svg>
                            <p>Pickup</p>
                        </div>
                        <div className='type typeFedex'>
                            <svg>
                                <use href="#fedex" xlinkHref="#fedex"/>
                            </svg>
                            <p>Fedex</p>
                        </div>
                        <div className='type'>
                            <svg>
                                <use href="#cart" xlinkHref="#cart"/>
                            </svg>
                            <p>Интернет</p>
                        </div>
                    </div>
                </div>
                <div className='sender'>
                    <div className='head'>
                        <h6>Отправитель</h6>
                        <div className='search'>
                            <SearchInput placeholderName='Поиск клиента'/>
                        </div>
                    </div>
                    <div className='inputRow'>
                        <InputC typeName='text' labelText='Фамилия' requiredInput={true}/>
                        <InputC typeName='text' labelText='Имя' requiredInput={true}/>
                        <InputC typeName='text' labelText='ID-card'/>
                        <div className='radio'>
                            <label>Пол</label>
                            <Radio.Group onChange={genderChoose} value={radioGender}>
                                <Radio value='Мужской'>Мужской</Radio>
                                <Radio value='Женский'>Женский</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className='inputRow'>
                        <InputC prefixSelect={<SelectNumber number={number} handleNumberChange={handleNumberChange} />} requiredInput={true} labelText='Номер телефона'/>
                        <InputC prefixSelect={<SelectNumber number={number} handleNumberChange={handleNumberChange} />} labelText='Дополнительный номер'/>
                        <InputC typeName='email' labelText='E-mail'/>
                    </div>
                </div>

                <Receiver handleNumberChange={handleNumberChange} number={number} genderChoose={genderChooseReceiver} radioGender={radioGenderReceiver} />

                <FormAddOrders />
                <ExtraServices/>


            </div>
        </div>
    )
}

export default NewOrder