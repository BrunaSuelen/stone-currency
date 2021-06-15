import axios from 'axios';

const IOF = { cash: 1.1, card: 6.4 };

function getQuotation() {
  return axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL');
}

function dollarToRealConverter(data) {
  const { isCash, dollar, stateFee, quotation } = data;
  const IOFCalculated = (dollar * IOF[isCash ? 'cash' : 'card']) / 100;
  const FeeCalculated = (dollar * stateFee) / 100;
  
  return isCash
    ? (dollar + FeeCalculated) * (quotation + IOFCalculated)
    : (dollar + FeeCalculated + IOFCalculated) * quotation;
}

export { getQuotation, dollarToRealConverter };