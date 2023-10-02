import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import "./login.css";
import * as yup from "yup";

const schema = yup
  .object({
    userName: yup.string().required("El campo es obligatorio"),
    password: yup.string().required("El campo es obligatorio"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
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
      roles: ["admin"],
    };

    login(user, user.roles.includes("admin")); // Actualiza el estado de autenticación
    navigate("/");
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-login">
        <h2 className="title">Login</h2>
        <div className="container-fields">
          <label className="fields">Usuario </label>
          <input {...register("userName")} />
          <p className="errors">{errors.userName?.message}</p>
        </div>
        <div className="container-fields">
          <label className="fields">Password </label>
          <input {...register("password")} type="password" />
          <p className="errors">{errors.password?.message}</p>
        </div>
        <input className="button" type="submit" />
      </form>
    </div>
  );
};

export default Login;
