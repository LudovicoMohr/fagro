import { Link, useLocation } from "react-router-dom";
const Links = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToProducts = () => {
    if (!isHomePage) return;
    const products = document.getElementById("products");
    products.scrollIntoView({ behavior: "smooth" });
    removeExpandedClass();
  };

  const removeExpandedClass = () => {
    let mobileExpandedMenu = document.querySelector(".mobile-expanded-menu");
    mobileExpandedMenu.classList.remove("mobile-expanded");
  };

  return (
    <div className="links">
      <Link to={"/"} onClick={removeExpandedClass}>
        Ofertas
      </Link>
      <Link to={"/#products"} onClick={scrollToProducts}>
        Novidades
      </Link>
      <Link to={"/delivery"} onClick={removeExpandedClass}>
        Entrega
      </Link>
    </div>
  );
};

// replace with react router
export default Links;
