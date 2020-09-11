import React from "react";
import SearchInput from "../Search";
import InputC from "../Input/Input";
import {Radio} from "antd";
import SelectNumber from "../Input/SelectNumber";
import SelectInputRegion from "../Input/SelectInputRegion";


const Receiver = ({number, genderChoose, radioGender, handleNumberChange}) => {
    const randId = 'label' + Math.floor(Math.random() * 10000);
    const values = ['Uzbekistan', 'USA', 'Russian'];
    const regions = ['Tashkent', 'Sirdaryo', 'Samarkand', 'Khorezm', 'Bukhara', 'Navoi', 'Andijan', 'Fergana', 'Namangan', 'Jizzakh', 'Kashkadaryo', 'Surkhendaryo'];
    const cities = ['Tashkent', 'Karshi', 'Andijan', 'Gulistan'];

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const handleChangeRegion = (value) => {
        console.log(`selected ${value}`);
    };

    const handleChangeCities = (value) => {
        console.log(`selected ${value}`);
    };

  return(

      <div className='sender'>
          <div className='head'>
              <h6>Получатель</h6>
              <div className='search'>
                  <SearchInput placeholderName='Поиск клиента'/>
              </div>
          </div>
          <div className='inputRow'>
              <InputC typeName='text' labelText='Фамилия' requiredInput={true}/>
              <InputC typeName='text' labelText='Имя' requiredInput={true}/>
              <InputC typeName='text' labelText='Серия и номер паспорта'/>
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

          <div className='inputRow'>
              <div className='selectRegionBox'>
                  <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                      Страна <span className='required' />
                  </label>
                  <SelectInputRegion id={randId} value={values[0]} values={values} handleChange={handleChange} requiredInput={true} />
              </div>

              <div className='selectRegionBoxSecond'>
                  <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                      Регион <span className='required' />
                  </label>
                  <SelectInputRegion id={randId} value={regions[0]} values={regions} handleChange={handleChangeRegion} requiredInput={true} />
              </div>

              <div className='selectRegionBoxSecond'>
                  <label style={{marginBottom: '5px', fontSize: '16px'}} htmlFor={randId}>
                      Город / Район <span className='required' />
                  </label>
                  <SelectInputRegion id={randId} value={cities[0]} values={cities} handleChange={handleChangeCities} requiredInput={true} />
              </div>
              <InputC myClass='Street' typeName='text' labelText='Улица'/>
          </div>
      </div>
  )
};

export default Receiver;