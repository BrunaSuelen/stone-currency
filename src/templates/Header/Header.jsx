import "./Header.scss";
import moment from 'moment';
import logo from "../../assets/images/logo.svg";

const Header = () => {
  moment.updateLocale('en', {
    months : [
      "de Janeiro", "de Fevereiro", "de Março", "de Abril", "de Maio", "de Junho", "de Julho",
      "de Agosto", "de Setembro", "de Outubro", "de Novembro", "de Dezembro"
    ]
  });

  const date = moment().format('DD MMMM YYYY | HH:mm') + ' UTC';


  return (
    <div className="content">
      <img src={logo} alt="Stone | Currency" />
      <div className="date-currenty">
        <h5>{date}</h5>
        <p>Dados de câmbio disponibilizados pela Morningstar.</p>
      </div>
    </div>
  );
};

export default Header;
