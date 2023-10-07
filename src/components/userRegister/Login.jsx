import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import "./login.css";
import * as yup from "yup";
import { loginUser } from "../../utils/DataExchange";
import { useState } from "react";

const schema = yup
  .object({
    userName: yup.string().required("El campo es obligatorio"),
    password: yup.string().required("El campo es obligatorio"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const userAuth = loginUser(data);
    if (userAuth) {
      login(userAuth, userAuth.roles.includes("admin")); // Actualiza el estado de autenticación
      navigate("/");
    } else {
      setError("credenciales incorrectas");
    }
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-login">
        <h2 className="title">Login</h2>
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
          <p className="errors">{error ? error : null}</p>
        </div>
        <button className="button" type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
