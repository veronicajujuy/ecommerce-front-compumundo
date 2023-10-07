import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./additems.css";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup
      .string()
      .required("El campo es obligatorio")
      .min(5, "El nombre del producto debe tener al menos 5 caracteres"),
    description: yup
      .string()
      .required("El campo es obligatorio")
      .min(1, "La descripción debe tener al menos 1 caracter"),
    type: yup.string().required("El campo es obligatorio"),
    size: yup.string().required("El campo es obligatorio"),
    frecuency: yup.string().required("El campo es obligatorio"),
    stock: yup
      .number("El campo debe ser numérico")
      .required("El campo es obligatorio"),
    price: yup
      .number("El campo debe ser numérico")
      .required("El campo es obligatorio"),
  })
  .required();

// eslint-disable-next-line react/prop-types
const AddRam = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-login">
        <h2 className="title">Agregar RAM</h2>
        <div className="form-fields">
          <div className="input-field">
            <div>
              <label className="fields">Nombre del Producto</label>
              <input
                {...register("name")}
                className={
                  errors.name ? "input-inside error-field " : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.name?.message}</p>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Descripción:</label>
              <input
                {...register("description")}
                className={
                  errors.description
                    ? "input-inside error-field "
                    : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.description?.message}</p>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Tipo:</label>
              <input
                {...register("type")}
                className={
                  errors.type ? "input-inside error-field " : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.type?.message}</p>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Tamaño:</label>
              <input
                {...register("size")}
                className={
                  errors.size ? "input-inside error-field " : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.size?.message}</p>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Frecuencia:</label>
              <input
                {...register("frecuency")}
                className={
                  errors.frecuency
                    ? "input-inside error-field "
                    : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.frecuency?.message}</p>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Stock:</label>
              <input
                {...register("stock")}
                type="number"
                className={
                  errors.stock ? "input-inside error-field " : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.stock?.message}</p>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Precio:</label>
              <input
                {...register("price")}
                type="number"
                className={
                  errors.price ? "input-inside error-field " : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.price?.message}</p>
          </div>
        </div>
        <button className="button" type="submit">
          Agregar RAM
        </button>
      </form>
    </div>
  );
};

export default AddRam;
