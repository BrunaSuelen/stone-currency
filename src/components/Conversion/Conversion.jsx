import React, { Component } from 'react';

import { getQuotation, dollarToRealConverter } from '../../services/quotationService';
import './Conversion.scss';

export default class Conversion extends Component {
  constructor(props) {
    super(props);
    this.getConversion();
    this.state = { result: 0, formData: props.formValues};
  }

  getConversion() {
    getQuotation()
      .then(response => {
        let quotation = parseFloat(response.data.USDBRL.bid);
      
        if (quotation) {
          const dataToConversion = {...this.state.formData};
          dataToConversion.quotation = quotation;
          const convertedValue = dollarToRealConverter(dataToConversion);

          this.setState({result: convertedValue, formData: dataToConversion});
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  formatFloatToFixed(value) {
    return value ? value.toFixed(2) : value;
  }

  getFormatResult() {
    let real = 0;
    if (this.state.result) {
      real = this.formatFloatToFixed(this.state.result);
      real = real.toString().replace('.', ',');
    }

    return real;
  }

  render() {
    return (
      <React.Fragment>
        <h5>O resultado do cálculo é</h5>
        <h1>R$ {this.getFormatResult()}</h1>
        <p>Compra no {this.state.formData.isCash ? 'dinheiro' : 'cartão'} e taxa de {this.getFormatResult()}%</p>
        <p>Cotação do dólar: $1,0 = R$ {this.formatFloatToFixed(this.state.formData.quotation)}</p>
      </React.Fragment>
    );
  }
}