// registro del usuario - viene de Register.jsx
export const userRegister = (data) => {
  console.log(data);
};

//login usuario
export const loginUser = (user) => {
  const loginUser = {
    ...user,
    roles: ["admin"],
  };
  return loginUser;
};

// agregar producto
export const addProduct = (product) => {
  console.log(product);
};
