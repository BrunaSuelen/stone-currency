import React, { useState } from 'react';

import InputText from '../InputText/InputText';
import InputRadio from '../InputRadio/InputRadio';

import convertIcon from "../../assets/icons/convert.svg";
import './Form.scss'

const Form = (props) => {
  const { showConversion } = props;
  const formValueDefault = {
    dollar: '1,0',
    stateFee: 0,
    isCash: true
  }
  const [formValues, setFormValues] = useState({
    dollar: formValueDefault.dollar,
    stateFee: formValueDefault.stateFee,
    isCash: formValueDefault.isCash
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

  function initConversion(event) {
    event.preventDefault();
    formatValuesToConvert();
    showConversion(formValues);
  }

  function formatValuesToConvert() {
    let dataToUpdate = {...formValues};
    dataToUpdate.dollar = parseFloat(dataToUpdate.dollar.replace('$', '').replace(',','.'));
    dataToUpdate.stateFee = parseFloat(dataToUpdate.stateFee.replace('%', '').replace(',','.'));

    setFormValues(dataToUpdate);
  }
  
  return (
    <form>
      <InputText 
        id='dollar'
        label='Dólar'
        inputLeft='true'
        value={formValues.dollar}
        defaultValue={formValueDefault.dollar}
        change={(e) => onChangeInput(e.target)}
      />

      <InputText
        id='stateFee'
        label='stateFee'
        value={formValues.stateFee}
        defaultValue={formValueDefault.stateFee}
        change={(e) => onChangeInput(e.target)}
      />

      <InputRadio change={(e) => onChangeIsCash(e)} />

      <button 
        className="button-convert"
        disabled={disableButton()}
        onClick={(e) => initConversion(e)}
      >
        <img src={convertIcon} alt='Converter'/>
        Converter
      </button>
    </form>
  );
}
  
export default Form;