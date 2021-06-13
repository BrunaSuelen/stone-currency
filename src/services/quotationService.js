import axios from 'axios';

function getQuotation() {
  axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}

export default getQuotation;