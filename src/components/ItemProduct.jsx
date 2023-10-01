/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import ItemCards from "./ItemCards";
import { Link } from "react-router-dom";
import "./gpus.css";

function ItemProduct({ product, productName }) {
  const colorBackground =
    productName == "GPUs" ? "color-container-2" : "color-container-1";
  const nombreClase = `section-container ${colorBackground}`;
  console.log(productName, nombreClase);
  return (
    <div className={nombreClase}>
      <h1>{productName}</h1>
      <div className="cards-container">
        {product.map((item) => (
          <div key={item.id}>
            <Link to={`products/${item.id}`}>
              <ItemCards item={item} offer={false} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemProduct;
