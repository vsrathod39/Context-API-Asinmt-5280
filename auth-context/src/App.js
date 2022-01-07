import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { AuthContext } from "./Contexts/AuthContextProvider";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import LoginStatus from "./Components/LoginStatus";

function App() {
  const { signupBtn, loginBtn, toggleAuth } = React.useContext(AuthContext);
  return (
    <div>
      <Navbar />
      {signupBtn ? <SignUp /> : null}
      {loginBtn ? <Login /> : null}
      {toggleAuth ? <LoginStatus /> : null}
    </div>
  );
}

export default App;
