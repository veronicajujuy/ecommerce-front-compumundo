import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./additems.css";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    name: yup
      .string()
      .required("El campo es obligatorio")
      .min(5, "El nombre del producto debe que tener al menos 5 caracteres"),
    description: yup
      .string()
      .required("El campo es obligatorio")
      .min(1, "La descripcion debe que tener al menos 1 caracter"),
    cores: yup
      .number("El campo debe ser numerico")
      .required("El campo es obligatorio"),
    threads: yup
      .number("El campo debe ser numerico")
      .required("El campo es obligatorio"),
    bootsClock: yup
      .number("El campo debe ser numerico")
      .required("El campo es obligatorio"),
    baseClock: yup
      .number("El campo debe ser numerico")
      .required("El campo es obligatorio"),
    stock: yup
      .number("El campo debe ser numerico")
      .required("El campo es obligatorio"),
    price: yup
      .number("El campo debe ser numerico")
      .required("El campo es obligatorio"),
  })
  .required();

// eslint-disable-next-line react/prop-types
const AddCPU = ({ onSubmit }) => {
  const [cacheMemory, setCacheMemory] = useState([{ level: "", size: "" }]);

  const addCacheMemory = () => {
    setCacheMemory([...cacheMemory, { level: "", size: "" }]);
  };

  const removeCacheMemory = (index) => {
    const updatedCacheMemory = [...cacheMemory];
    updatedCacheMemory.splice(index, 1);
    setCacheMemory(updatedCacheMemory);
  };

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
        <h2 className="title">Agregar Producto</h2>
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
          <div className="input-field input-field-more">
            <div>
              <div>
                <label className="fields">cores:</label>
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
                <label className="fields">threads</label>
                <input
                  {...register("threads")}
                  className={
                    errors.threads
                      ? "input-inside error-field "
                      : "input-inside"
                  }
                />
              </div>
              <p className="errors">{errors.threads?.message}</p>
            </div>
          </div>
          <div className="input-field  input-field-more">
            <div>
              <div>
                <label className="fields">bootsClock</label>
                <input
                  {...register("bootsClock")}
                  className={
                    errors.bootsClock
                      ? "input-inside error-field "
                      : "input-inside"
                  }
                />
              </div>
              <p className="errors">{errors.bootsClock?.message}</p>
            </div>
            <div className="input-field">
              <div>
                <label className="fields">baseClock</label>
                <input
                  {...register("baseClock")}
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
        </div>
        <div className="input-field">
          <label className="fields">Memoria Caché:</label>
          {cacheMemory.map((cache, index) => (
            <div key={index} className="cache-memory">
              <input
                {...register(`cacheMemory[${index}].level`)}
                placeholder="Nivel"
                className="input-inside"
              />
              <input
                {...register(`cacheMemory[${index}].size`)}
                placeholder="Tamaño"
                className="input-inside"
              />
              {index > 0 && (
                <button
                  type="button"
                  className="button2"
                  onClick={() => removeCacheMemory(index)}
                >
                  Eliminar
                </button>
              )}
              <button
                type="button"
                onClick={addCacheMemory}
                className="button2"
              >
                Agregar Memoria Caché
              </button>
            </div>
          ))}
        </div>

        <div className="input-field">
          <div>
            <label className="fields">Stock:</label>
            <input
              {...register("stock")}
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
              className={
                errors.price ? "input-inside error-field " : "input-inside"
              }
            />
          </div>
          <p className="errors">{errors.price?.message}</p>
        </div>

        <button className="button" type="submit">
          Agregar Item
        </button>
      </form>
    </div>
  );
};

export default AddCPU;
