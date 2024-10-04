import "./Benefits.css";
import { FaRecycle, FaSmileWink } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Benefits = () => {
  let benefits = [
    {
      icon: <FaRecycle></FaRecycle>,
      title: "SUSTENTABILIDADE",
      text: "Temos o compromisso de valorizar a sustentabilidade e o comércio local",
      id: 1,
    },
    {
      icon: <AiFillSafetyCertificate></AiFillSafetyCertificate>,
      title: "PAGAMENTO SEGURO",
      text: "Todos os pagamentos são 100% seguros",
      id: 2,
    },
    {
      icon: <FaSmileWink></FaSmileWink>,
      title: "SERVIÇOS AMIGÁVEIS",
      text: "Valorizamos os serviços educados",
      id: 3,
    },
  ];
  const allBenefits = benefits.map((benefit) => {
    return (
      <div className="benefits-item" key={benefit.id}>
        <div className="benefit-icon">{benefit.icon}</div>
        <div className="benefit-text">
          <h3 className="benefit-title">{benefit.title}</h3>
          <p className="benefit-body">{benefit.text}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="sub-container main-benefit">
      <div className="benefits">{allBenefits}</div>
    </div>
  );
};
export default Benefits;
