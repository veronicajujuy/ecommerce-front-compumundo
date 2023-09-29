import cpus from "../data/cpus.json";
import gpus from "../data/gpus.json";
import rams from "../data/rams.json";
import ItemProduct from "./ItemProduct";
const Products = () => {
  return (
    <div>
      <ItemProduct product={cpus} productName={"CPUs"} />
      <ItemProduct product={gpus} productName={"GPUs"} />
      <ItemProduct product={rams} productName={"RAMs"} />
    </div>
  );
};

export default Products;
