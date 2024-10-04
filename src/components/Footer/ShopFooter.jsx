import "./ShopFooter.css";
import { Link } from "react-router-dom";


const ShopFooter = () => {
  const newYear = new Date().getFullYear();
  return (
    <div className="sub-container">
      <div className="useful-links">
        <h2 className="logo-text">Fagro</h2>
        <ul className="useful-details">
          <li>+55 51 99999-9999</li>
          <li>Santa Cruz do Sul, RS, Brasil</li>
          <li>Fagro ainda está em desenvolvimento.</li>
        </ul>
      </div>
      <div className="bottom-section">
        <div className="bottom-section-left">
          <ul>
            <li>
              <Link to={"/"}>Ofertas</Link>
            </li>
            <li>
              <a href="#products">Novidades</a>
            </li>
            <li>
              <a href="#">Entregas</a>
            </li>
          </ul>
        </div>
        <div className="bottom-sectino-right">copyright &copy; {newYear}</div>
      </div>
    </div>
  );
};
export default ShopFooter;
