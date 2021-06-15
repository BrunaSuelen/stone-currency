import "./Header.scss";
import moment from 'moment';
import logo from "../../assets/images/logo.svg";

const Header = () => {
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
