import { useState } from "react";
import AddCPU from "./AddCPU";
import AddGpu from "./AddGPU";
import AddRam from "./AddRAM";
import { addProduct } from "../../utils/DataExchange";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [selectedProductType, setSelectedProductType] = useState("CPU");
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    addProduct(data);
    navigate("/");
  };

  return (
    <div className="container-form">
      <h2 className="title">Agregar Producto</h2>
      <div>
        <label>Seleccione el tipo de producto:</label>
        <select
          value={selectedProductType}
          onChange={(e) => setSelectedProductType(e.target.value)}
        >
          <option value="CPU">CPU</option>
          <option value="GPU">GPU</option>
          <option value="RAM">RAM</option>
        </select>
      </div>
      {selectedProductType === "CPU" && <AddCPU onSubmit={handleSubmit} />}
      {selectedProductType === "GPU" && <AddGpu onSubmit={handleSubmit} />}
      {selectedProductType === "RAM" && <AddRam onSubmit={handleSubmit} />}
    </div>
  );
};

export default AddProducts;
