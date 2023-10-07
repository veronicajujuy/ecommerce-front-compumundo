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
    cores: yup
      .number("El campo debe ser numérico")
      .required("El campo es obligatorio"),
    boostClock: yup
      .number("El campo debe ser numérico")
      .required("El campo es obligatorio"),
    baseClock: yup
      .number("El campo debe ser numérico")
      .required("El campo es obligatorio"),
    standardMemory: yup.object({
      type: yup.string().required("El campo es obligatorio"),
      size: yup.string().required("El campo es obligatorio"),
      interfaceWidth: yup.string().required("El campo es obligatorio"),
    }),
    stock: yup
      .number("El campo debe ser numérico")

      .required("El campo es obligatorio"),
    price: yup
      .number("El campo debe ser numérico")

      .required("El campo es obligatorio"),
  })
  .required();

// eslint-disable-next-line react/prop-types
const AddGpu = ({ onSubmit }) => {
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
        <h2 className="title">Agregar GPU</h2>
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
              <label className="fields">Descripcion:</label>
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
          <div className="input-field  input-field-more">
            <div>
              <div>
                <label className="fields">Cores:</label>
                <input
                  {...register("cores")}
                  type="number"
                  className={
                    errors.cores ? "input-inside error-field " : "input-inside"
                  }
                />
              </div>
              <p className="errors">{errors.cores?.message}</p>
            </div>
            <div className="input-field">
              <div>
                <label className="fields">Boost Clock:</label>
                <input
                  {...register("boostClock")}
                  type="number"
                  className={
                    errors.boostClock
                      ? "input-inside error-field "
                      : "input-inside"
                  }
                />
              </div>
              <p className="errors">{errors.boostClock?.message}</p>
            </div>
            <div className="input-field">
              <div>
                <label className="fields">Base Clock:</label>
                <input
                  {...register("baseClock")}
                  type="number"
                  className={
                    errors.baseClock
                      ? "input-inside error-field "
                      : "input-inside"
                  }
                />
              </div>
              <p className="errors">{errors.baseClock?.message}</p>
            </div>
          </div>
          <div className="input-field input-field-more">
            <div>
              <div>
                <label className="fields">Standard Memory Type:</label>
                <input
                  {...register("standardMemory.type")}
                  className={
                    errors["standardMemory.type"]
                      ? "input-inside error-field "
                      : "input-inside"
                  }
                />
              </div>
              <p className="errors">{errors["standardMemory.type"]?.message}</p>
            </div>
            <div className="input-field">
              <div>
                <label className="fields">Standard Memory Size:</label>
                <input
                  {...register("standardMemory.size")}
                  className={
                    errors["standardMemory.size"]
                      ? "input-inside error-field "
                      : "input-inside"
                  }
                />
              </div>
              <p className="errors">{errors["standardMemory.size"]?.message}</p>
            </div>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Interface Width:</label>
              <input
                {...register("standardMemory.interfaceWidth")}
                className={
                  errors["standardMemory.interfaceWidth"]
                    ? "input-inside error-field "
                    : "input-inside"
                }
              />
            </div>
            <p className="errors">
              {errors["standardMemory.interfaceWidth"]?.message}
            </p>
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
          Agregar GPU
        </button>
      </form>
    </div>
  );
};

export default AddGpu;
