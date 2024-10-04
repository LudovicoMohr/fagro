import "./EmptyState.css";
import EmptyCart from "../../../assets/images/empty-cart.png";
import { Link } from "react-router-dom";
const EmptyState = () => {
  return (
    <div className="empty-cart-state">
      <div className="empty-cart-image">
        <img src={EmptyCart} alt="Empty cart" width={100} />
      </div>
      <div className="empty-cart-text">
        <h2>Carrinho está vazio</h2>
        <p>Parece que você ainda não adicionou nada ao seu carrinho.</p>
        <Link to={"/"} className="add-item">
          Adicione itens para começar.
        </Link>
      </div>
    </div>
  );
};
export default EmptyState;
