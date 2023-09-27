import Ofertas from "./Ofertas";
import "./main.css";
const Main = () => {
  return (
    <div className="container-main">
      <Ofertas />
      <img className="imagen-banner" src="./banner.png" alt="banner" />
    </div>
  );
};

export default Main;
