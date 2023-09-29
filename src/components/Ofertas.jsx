import Carousel from "react-bootstrap/Carousel";
import productosOferta from "../data/offers.json";
import ItemCards from "./ItemCards";
import "./ofertas.css";

function Ofertas() {
  const groupSize = 4;
  const productsInGroups = [];

  for (let i = 0; i < productosOferta.length; i += groupSize) {
    productsInGroups.push(productosOferta.slice(i, i + groupSize));
  }

  return (
    <div className="offer-container">
      <h1>Ofertas</h1>
      <div className="carousel-container">
        <Carousel>
          {productsInGroups.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <div className="card-container">
                {group.map((item) => (
                  <ItemCards key={item.id} item={item} offer={true} />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Ofertas;
