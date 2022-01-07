import React from "react";
import { Div } from "./LoginStatus.Style";
import { AuthContext } from "../Contexts/AuthContextProvider";

export default function LoginStatus() {
  const { isAuth } = React.useContext(AuthContext);
  return (
    <Div>
      {isAuth.status ? (
        <>
          <p style={{ color: "green" }}>Logi-in: Succes</p>
          <p>Token: {isAuth.token}</p>
        </>
      ) : (
        <p style={{ color: "red" }}>Login failed</p>
      )}
    </Div>
  );
}
