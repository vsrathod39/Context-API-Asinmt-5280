import React from "react";
export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState();
  const [toggleAuth, setToggleAuth] = React.useState();
  const [signupBtn, setSignupBtn] = React.useState(false);

  const value = {
    isAuth,
    toggleAuth,
    signupBtn,
    setIsAuth,
    setToggleAuth,
    setSignupBtn,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
}
