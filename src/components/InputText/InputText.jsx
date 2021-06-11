import React from 'react';
import MaskedInput from 'react-text-mask'
import currencyMask from './currencyMask';

import './InputText.scss'

const InputText = (props) => {
  const { id, label, change, inputLeft } = props;
  const className = `form-input ${inputLeft ? 'input-text' : 'input-right'}`

  return (
    <div className={className}>
      <label from={id}>{label}</label>
      { 
        id === 'dollar'
        ? <MaskedInput id={id} mask={currencyMask} onChange={e => change(e)} />
        : <input id={id} onChange={e => change(e)} />
      }
    </div>
  );
}

export default InputText;
