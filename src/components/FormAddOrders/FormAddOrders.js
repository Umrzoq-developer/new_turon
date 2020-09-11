import React from "react";
import './FormAddOrders.scss'
import InputC from "../../components/Input/Input";
import SelectInputRegion from "../Input/SelectInputRegion";
import UIButton from "../Button";

const FormAddOrders = () => {

    const cargoOrder = [
        'Выберите карго товар 1',
        'Выберите карго товар 2',
        'Выберите карго товар 3',
        'Выберите карго товар 4'
    ]

    const handleCargoChange = value => {
        console.log(value)
    }

    return(
        <div className='FormAddOrders'>
            <h6>Товары</h6>
            <div className='rowAddOrders'>
                <div className='item orderId'>
                    <label>№</label>
                    <span>1</span>
                </div>
                <div className='item'>
                    <InputC placeholderName='Наименование' typeName='text' labelText='Наименование' />
                </div>
                <div className='item'>
                    <InputC placeholderName='Кол-во' typeName='text' labelText='Количество' />
                </div>
                <div className='item'>
                    <InputC placeholderName='Цена' typeName='text' labelText='Стоимость $' />
                </div>
                <div className='item'>
                    <InputC placeholderName='Вес, кг' typeName='text' labelText='Вес, кг' />
                </div>
            </div>
            <div className='rowAddOrders'>
                <div className='item orderId'>
                    <span>2</span>
                </div>
                <div className='item'>
                    <InputC placeholderName='Наименование' typeName='text' />
                </div>
                <div className='item'>
                    <InputC placeholderName='Кол-во' typeName='text' />
                </div>
                <div className='item'>
                    <InputC placeholderName='Цена' typeName='text' />
                </div>
                <div className='item'>
                    <InputC placeholderName='Вес, кг' typeName='text' />
                </div>
                <div className='item itemDelete'>
                    <UIButton icon='#trashBox' />
                </div>
            </div>
            <div className='rowAddOrders rowCargoOrder'>
                <div className='item orderId'>
                    <span>3</span>
                </div>
                <div className='item'>
                    <SelectInputRegion value={cargoOrder[0]} values={cargoOrder} handleChange={handleCargoChange} />
                </div>
                <div className='item'>
                    <InputC placeholderName='Кол-во' typeName='text' />
                </div>
                <div className='item'>
                    <InputC placeholderName='Цена' typeName='text' />
                </div>
                <div className='item'>
                    <InputC placeholderName='Вес, кг' typeName='text' />
                </div>
                <div className='item itemDelete'>
                    <UIButton icon='#trashBox' />
                </div>
            </div>
            <div className='rowAddOrders'>
                <div className='item' />
                <div className='item buttonsC'>
                    <UIButton icon='#plusCircle' name='Добавить еще' />
                    <UIButton icon='#kargoIcon' name='Добавить карго' />
                    <span className='summaryText'>Итого</span>
                </div>
                <div className='item sumItemCount'>
                    <InputC placeholderName='Кол-во' typeName='text' value='0' />
                </div>
                <div className='item sumItemPrice'>
                    <InputC innerLabel='$' value='0' typeName='text' />
                </div>
                <div className='item sumItemWeight'>
                    <InputC innerLabel='кг' value='0' typeName='text' />
                </div>
            </div>
        </div>
    )
}

export default FormAddOrders