import Ofertas from "./Ofertas";
import Products from "./Products";
import "./main.css";
const Main = () => {
  return (
    <div className="container-main">
      <Ofertas />
      <img className="imagen-banner" src="./banner.png" alt="banner" />
      <Products />
    </div>
  );
};

export default Main;
