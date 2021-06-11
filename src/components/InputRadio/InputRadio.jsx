import React, { useState } from 'react';

const InputRadio = (props) => {
  const [isCash, setIsCash] = useState(true);
  const { change } = props;

  function changeRadio(cashRadio) {
    setIsCash(cashRadio);
    change(cashRadio);
  }

  return (
    <div>
      <input 
        id="cash" 
        type="radio" 
        checked={isCash}
        onChange={() => changeRadio(true)}
      />
      <label htmlFor="cash">Dinheiro</label>

      <input 
        id="card" 
        type="radio" 
        checked={!isCash}
        onChange={() => changeRadio(false)}
      />
      <label htmlFor="card">Cartão</label>
    </div>
  );
}

export default InputRadio;
