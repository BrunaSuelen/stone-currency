import moment from 'moment';

function initLocale() {
  moment.updateLocale('en', {
    months: [
      "de Janeiro", "de Fevereiro", "de Março", "de Abril", "de Maio", "de Junho", "de Julho",
      "de Agosto", "de Setembro", "de Outubro", "de Novembro", "de Dezembro"
    ]
  });
}

export { initLocale };