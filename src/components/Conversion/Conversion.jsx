import React, { useState } from 'react';

import { getQuotation, dollarToRealConverter } from '../../services/quotationService'

const Conversion = (props) => {
  const { formValues } = props;
  const [result, setResult] = useState(0);

  getConversion();

  function getConversion() {
    getQuotation()
      .then(response => {
        let quotation = parseFloat(response.data.USDBRL.bid);
      
        if (quotation) {
          const dataToConversion = {...formValues};
          dataToConversion.quotation = quotation;
          const convertedValue = dollarToRealConverter(dataToConversion);
          setResult(convertedValue.toFixed(2));
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <h5>O resultado do cálculo é</h5>
      <h1>{result}</h1>
    </div>
  );
}
  
export default Conversion;