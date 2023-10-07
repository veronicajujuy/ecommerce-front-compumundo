import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./login.css";
import * as yup from "yup";
import { userRegister } from "../../utils/DataExchange";

const schema = yup
  .object({
    userName: yup
      .string()
      .required("El campo es obligatorio")
      .min(5, "El nombre de usuario debe que tener al menos 5 caracteres"),
    name: yup
      .string()
      .required("El campo es obligatorio")
      .min(1, "El nombre debe que tener al menos 1 caracter"),
    lastName: yup
      .string()
      .required("El campo es obligatorio")
      .min(1, "El apellido de usuario debe tener al menos 1 caracter"),
    email: yup
      .string()
      .required("El email es obligatorio")
      .email("El email no tiene un formato válido"),
    password: yup.string().required("El campo es obligatorio"),
  })
  .required();

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const user = {
      ...data,
      roles: [""],
    };
    userRegister(user);
    navigate("/");
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-login">
        <h2 className="title">Register</h2>
        <div className="form-fields">
          <div className="input-field">
            <div>
              <label className="fields">Usuario</label>
              <input
                {...register("userName")}
                className={
                  errors.userName ? "input-inside error-field " : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.userName?.message}</p>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Nombre</label>
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
              <label className="fields">Apellido</label>
              <input
                {...register("lastName")}
                className={
                  errors.lastName ? "input-inside error-field " : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.lastName?.message}</p>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Email</label>
              <input
                {...register("email")}
                className={
                  errors.email ? "input-inside error-field " : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.email?.message}</p>
          </div>
          <div className="input-field">
            <div>
              <label className="fields">Contraseña</label>
              <input
                {...register("password")}
                type="password"
                className={
                  errors.userName ? "input-inside error-field " : "input-inside"
                }
              />
            </div>
            <p className="errors">{errors.password?.message}</p>
          </div>
        </div>
        <button className="button" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
