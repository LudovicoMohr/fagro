import familiaagro from "@/assets/images/familia.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="sub-container">
      <div className="banner">
        <div className="banner-text">
          <h1>
            Colhido com amor <br></br>Entregue com carinho
          </h1>
          <span className="is-buy-now">
            <a href="#products">
              <button className="btn-rounded buy-now">Compre agora</button>
            </a>
          </span>
        </div>
        <div className="subject">
          <img src={familiaagro} alt="Família de Agricultores" width={"100%"} />
        </div>
      </div>
    </div>
  );
};
export default Banner;
