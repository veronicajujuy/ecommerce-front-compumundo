import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    userName: yup.string().required("El campo es obligatorio"),
    password: yup.string().required("El campo es obligatorio"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/products/addItem");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Usuario </label>
      <input {...register("userName")} />
      <p>{errors.userName?.message}</p>

      <label>Password </label>
      <input {...register("password")} type="password" />
      <p>{errors.password?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default Login;
