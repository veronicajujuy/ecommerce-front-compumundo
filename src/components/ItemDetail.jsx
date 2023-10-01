import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ItemDetail.css";
import getProductItem from "../utils/getData";
import TableDetails from "./TableDetails";

const ItemDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    setProduct(getProductItem(params.id));
  }, []);

  return (
    <div className="container-product">
      <div className="product-detail">
        <div className="left-detail">
          <div className="img-container">
            <img src={product && product.found.img} alt="" />
          </div>
        </div>
        <div className="right-detail">
          <h1>{product && product.found.name}</h1>
          <p>{product && product.found.description}</p>
          <p>{product && product.found.price}</p>
          <p>{product && product.found.stock}</p>
        </div>
        <div className="back-detail">
          {product && <TableDetails product={product.found} />}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
