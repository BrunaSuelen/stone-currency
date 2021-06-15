import React, { Component } from 'react';

import { getQuotation, dollarToRealConverter } from '../../services/quotationService';
import arrowBack from "../../assets/icons/arrow-back.svg";
import './Conversion.scss';

export default class Conversion extends Component {
  constructor(props) {
    super(props);
    this.state = { result: 0, formData: props.formValues, error: false};
    this.goBack = props.goBack;
  }

  componentDidMount() {
    this.getConversion();
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
        this.setState({error: true});
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
      <>
        <button className="button-back" onClick={() => this.goBack()}>
          <img src={arrowBack} alt='Voltar'/>
          Voltar
        </button>

        { 
          this.state.error 
            ? 
              (<div>              
                <h5>Desculpe, algo deu errado :(</h5>
                <p>Verifique o acesso a internet, ou tente novamente mais tarde.</p>
              </div>)
            : 
              (<div>              
                <h5>O resultado do cálculo é</h5>
                <h1>R$ {this.getFormatResult()}</h1>
                <p>Compra no {this.state.formData.isCash ? 'dinheiro' : 'cartão'} e taxa de {this.getFormatResult()}%</p>
                <p>Cotação do dólar: $1,0 = R$ {this.formatFloatToFixed(this.state.formData.quotation)}</p>
              </div>)
        }
      </>
    );
  }
}