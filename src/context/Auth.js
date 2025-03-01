import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ childeren }) => {
  const [state, setContextState] = useState({ isAuth: false, user: {} });
  return (
    <AuthContext.Provider value={{ ...state, setContextState }}>
      {childeren}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
