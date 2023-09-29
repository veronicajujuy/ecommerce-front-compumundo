/* eslint-disable react/prop-types */
import ItemCards from "./ItemCards";
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
          <ItemCards key={item.id} item={item} offer={false} />
        ))}
      </div>
    </div>
  );
}

export default ItemProduct;
