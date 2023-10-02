import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Logout from "./utils/Logout";
import AddItems from "./components/AddItems";
import ItemDetail from "./components/ItemDetail";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/logout" element={<Logout />} />
              <Route path="/products/addItem" element={<AddItems />} />
            </Route>
            <Route path="/products/:id" element={<ItemDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
