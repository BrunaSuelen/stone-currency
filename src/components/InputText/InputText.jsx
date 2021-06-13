import React from 'react';
import MaskedInput from 'react-text-mask'
import dollarMask from '../../mask/dollarMask';
import feeMask from '../../mask/feeMask';

import './InputText.scss'

const InputText = (props) => {
  const { id, label, change, value, inputLeft , defaultValue} = props;
  const className = `form-input ${inputLeft ? 'input-text' : 'input-right'}`;

  function fillInputInit(element) {
    if (value === defaultValue) {
      element.target.value = '';
      change(element);
    }
  }

  return (
    <div className={className}>
      <label from={id}>{label}</label>
      { 
        id === 'dollar'
        ? (<MaskedInput 
            id={id}
            value={value}
            mask={dollarMask}
            onChange={e => change(e)}
            onClick={e => fillInputInit(e)}
          />)
        : (<MaskedInput 
            id={id}
            value={value}
            mask={feeMask}
            onChange={e => change(e)}
            onClick={e => fillInputInit(e)}
          />)
      }
    </div>
  );
}

export default InputText;
