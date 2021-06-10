import React, { useState } from 'react';
import InputText from '../InputText/InputText';

import './Form.scss'

const Form = () => {
  const [formValues, setFormValues] = useState({
    dollar: 1.0,
    stateFee: 0
  });

  function onChangeInput(element) {
    let dataToSend = {...formValues};
    dataToSend[element.id] = parseFloat(element.value);

    setFormValues(dataToSend);
  }
  
  return (
    <form>
      <InputText 
        id='dollar'
        label='Dólar'
        value='formValues.dollar'
        inputLeft='true'
        change={(e) => onChangeInput(e.target)}
      />

      <InputText
        id='stateFee'
        label='stateFee'
        value='formValues.stateFee'
        change={(e) => onChangeInput(e.target)}
      />
    </form>
  );
}
  
export default Form;