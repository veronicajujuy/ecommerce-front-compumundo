import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Layout from "./components/Layout";
import Login from "./components/userRegister/Login";
import Logout from "./utils/Logout";
import ItemDetail from "./components/ItemDetail";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { AuthProvider } from "./utils/AuthContext";
import Register from "./components/userRegister/Register";
import AddProducts from "./components/CrudProducts/AddProducts";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/products/addProduct" element={<AddProducts />} />
            </Route>
            <Route path="/products/:id" element={<ItemDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
