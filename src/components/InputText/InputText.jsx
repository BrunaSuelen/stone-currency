import React from 'react';
import MaskedInput from 'react-text-mask'
import currencyMask from './currencyMask';

import './InputText.scss'

const InputText = (props) => {
  const { id, label, change, value } = props;

  return (
    <div className='form-input'>
      <label from={id}>{label}</label>
      { 
        id === 'dollar'
        ? <MaskedInput mask={currencyMask} onChange={e => change(e)} />
        : <input id={id} onChange={e => change(e)} />
      }
    </div>
  );
}

export default InputText;
