import React, { useState } from 'react';

import InputText from '../InputText/InputText';
import InputRadio from '../InputRadio/InputRadio';

import './Form.scss'

const Form = () => {
  const [formValues, setFormValues] = useState({
    dollar: 1.00,
    stateFee: 0,
    isCash: true
  });

  function onChangeInput(element) {
    let dataToUpdate = {...formValues};
    dataToUpdate[element.id] = element.value;

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
        change={(e) => onChangeInput(e.target)}
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