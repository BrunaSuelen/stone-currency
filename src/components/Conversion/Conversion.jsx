import React, { useState } from 'react';

import { getQuotation, dollarToRealConverter } from '../../services/quotationService';
import './Conversion.scss';

const Conversion = (props) => {
  const { formValues } = props;
  const [result, setResult] = useState(0);
  const [formData, setFormData] = useState({});

  getConversion();

  function getConversion() {
    getQuotation()
      .then(response => {
        let quotation = parseFloat(response.data.USDBRL.bid);
      
        if (quotation) {
          const dataToConversion = {...formValues};
          dataToConversion.quotation = quotation;
          const convertedValue = dollarToRealConverter(dataToConversion);

          setFormData(dataToConversion);
          setResult(convertedValue);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  function formatFloatToFixed(value) {
    return value ? value.toFixed(2) : value;
  }

  function getFormatResult() {
    let real = formatFloatToFixed(result);
    real = real.toString().replace('.', ',');
    return real;
  }

  return (
    <React.Fragment>
      <h5>O resultado do cálculo é</h5>
      <h1>R$ {getFormatResult()}</h1>
      <p>Compra no {formData.isCash ? 'dinheiro' : 'cartão'} e taxa de {getFormatResult()}%</p>
      <p>Cotação do dólar: $1,0 = R$ {formatFloatToFixed(formData.quotation)}</p>
    </React.Fragment>
  );
}
  
export default Conversion;