import React from "react";
export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);
  const [toggleAuth, setToggleAuth] = React.useState(null);
  const [signupBtn, setSignupBtn] = React.useState(false);
  const [loginBtn, setloginBtn] = React.useState(false);
  const [formState, setFormState] = React.useState();

  const value = {
    isAuth,
    toggleAuth,
    signupBtn,
    loginBtn,
    formState,
    setIsAuth,
    setToggleAuth,
    setSignupBtn,
    setloginBtn,
    setFormState,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
}
