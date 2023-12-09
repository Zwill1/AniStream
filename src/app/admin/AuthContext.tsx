import PropTypes from 'prop-types';

import { createContext, useContext, useReducer } from "react";

// @ts-ignore
const AuthContext = createContext();


const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state : any, action : any) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Admin",
  email: "admin@example.com",
  fullName: "John Smith",
  userId: "jsmith001",
  password: "password",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children } : { children: React.ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email : string, password : string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export { AuthProvider, useAuth };