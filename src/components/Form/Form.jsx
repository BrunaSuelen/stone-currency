import React, { useState } from 'react';
import InputText from '../InputText/InputText';

import './Form.scss'

const Form = () => {
  const [formValues, setFormValues] = useState({});

  function onChangeInput(element) {
    let dataToSend = {...formValues};
    dataToSend[element.id] = element.value;

    setFormValues(dataToSend);
  }
  
  return (
    <form>
      <InputText 
        id='dollar'
        label='Dólar'
        change={(e) => onChangeInput(e.target)}
      />

      <InputText
        id='stateFee'
        label='stateFee'
        change={(e) => onChangeInput(e.target)}
      />
    </form>
  );
}
  
export default Form;