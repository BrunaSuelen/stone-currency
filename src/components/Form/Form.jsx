import React from 'react';

import './Form.scss'
import InputText from '../InputText/InputText';

const Form = (props) => {
  const { changeTeste } = props;
  
  return (
    <form>
      <InputText label='Teste' id='teste' change={(e) => changeTeste(e)} />
      <InputText label='Teste1' id='teste1' change={(e) => changeTeste(e)} />
    </form>
  );
}
  
export default Form;