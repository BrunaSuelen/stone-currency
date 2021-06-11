import React, { useState } from 'react';

import InputText from '../InputText/InputText';
import InputRadio from '../InputRadio/InputRadio';

import './Form.scss'

const Form = () => {
  const [formValues, setFormValues] = useState({
    dollar: 1.0,
    stateFee: 0,
    isCash: true
  });

  function convertStringDollarInFloat(element) {
    const value = element.value.replace('$', '').replace(',', '.');
    onChangeInput(element, parseFloat(value));
  }

  function onChangeInput(element, value) {
    let dataToUpdate = {...formValues};
    dataToUpdate[element.id] = value || element.value;

    setFormValues(dataToUpdate);
  }

  function onChangeIsCash(isCash) {
    let dataToUpdate = {...formValues};
    dataToUpdate.isCash = isCash;

    setFormValues(dataToUpdate);
    console.log(dataToUpdate)
  }
  
  return (
    <form>
      <InputText 
        id='dollar'
        label='Dólar'
        value={formValues.dollar}
        inputLeft='true'
        change={(e) => convertStringDollarInFloat(e.target)}
      />

      <InputText
        id='stateFee'
        label='stateFee'
        value={formValues.stateFee}
        change={(e) => onChangeInput(e.target)}
      />

      <InputRadio change={(e) => onChangeIsCash(e)} />
    </form>
  );
}
  
export default Form;