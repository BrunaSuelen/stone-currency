import React, { useState } from 'react';

import './InputRadio.scss'

const InputRadio = (props) => {
  const [isCash, setIsCash] = useState(true);
  const { change } = props;

  function changeRadio(cashRadio) {
    setIsCash(cashRadio);
    change(cashRadio);
  }

  return (
    <div className="type-purchase-radio">
      <p>Tipo de Compra</p>
      <div className="cash-radio">
        <input 
          id="cash" 
          type="radio" 
          checked={isCash}
          onChange={() => changeRadio(true)}
          />
        <label htmlFor="cash">Dinheiro</label>
      </div>
      <div className="card-radio">
        <input 
          id="card" 
          type="radio" 
          checked={!isCash}
          onChange={() => changeRadio(false)}
          />
        <label htmlFor="card">Cartão</label>
      </div>
    </div>
  );
}

export default InputRadio;
