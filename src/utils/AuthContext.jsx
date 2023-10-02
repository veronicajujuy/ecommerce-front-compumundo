import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const initialState = {
  user: null,
  isAdmin: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        isAdmin: action.payload.isAdmin,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAdmin: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user, isAdmin) => {
    dispatch({ type: "LOGIN", payload: { user, isAdmin } });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
