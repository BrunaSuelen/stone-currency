import React, { useState } from 'react';

import InputText from '../InputText/InputText';
import InputRadio from '../InputRadio/InputRadio';

import convertIcon from "../../assets/icons/convert.svg";

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
  }

  function disableButton() {
    return !formValues.stateFee || !formValues.dollar;
  }

  function initConversion() {
    console.log(formValues)
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

      <button 
        className="button-convert"
        disabled={disableButton()}
        onClick={(e) => onChangeIsCash(e)}
      >
        <img src={convertIcon} />
        Converter
      </button>
    </form>
  );
}
  
export default Form;