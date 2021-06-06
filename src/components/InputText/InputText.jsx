import React from 'react';

import './InputText.scss'

const InputText = (props) => {
  const { id, label, change } = props;

  return (
    <div className='form-input'>
      <label from={id}>{label}</label>
      <input id={id} onChange={e => change(e)} />
    </div>
  );
}

export default InputText;
